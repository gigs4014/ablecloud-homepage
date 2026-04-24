# Watchtower를 이용한 자동 배포 가이드

이 문서는 GitHub Actions와 Watchtower를 결합하여 사내 VM에 컨테이너를 자동으로 배포하는 방법을 설명합니다. 이 방식은 VM에 GitHub Self-hosted Runner를 설치할 필요가 없어 관리가 매우 간편합니다.

## 1. 동작 원리

1.  **GitHub Actions**: 코드를 빌드하고 Docker 이미지를 Docker Hub에 푸시합니다. (이때 `latest` 태그를 함께 업데이트합니다.)
2.  **VM (Watchtower)**: 주기적으로 Docker Hub를 체크하여 실행 중인 이미지의 새 버전이 있는지 확인합니다.
3.  **VM (Watchtower)**: 새 이미지가 발견되면 기존 컨테이너를 안전하게 중지 및 삭제하고, 새 이미지로 컨테이너를 자동 재시작합니다.

## 2. GitHub Actions 설정 수정

`.github/workflows/docker-image.yml` 파일에서 `deploy` Job을 제거하고, 빌드 시 `latest` 태그가 생성되도록 수정합니다.

```yaml
# deploy job은 더 이상 필요하지 않으므로 삭제합니다.
# 대신 build-and-push 단계에서 tags에 latest를 포함시키세요.
```

## 3. VM 서버 설정 (최초 1회 실행)

배포 대상이 되는 VM에 접속하여 아래 두 단계를 수행합니다.

### 1) 서비스 컨테이너 실행
먼저 배포할 홈페이지 컨테이너를 실행합니다. (태그는 `latest`로 고정합니다.)

```bash
docker run -d \
  --name ablecloud-homepage \
  --restart unless-stopped \
  -p 8888:80 \
  ablecloudteam/ablecloud-homepage:latest
```

### 2) Watchtower 실행
서비스 컨테이너를 감시할 Watchtower를 실행합니다.

```bash
docker run -d \
  --name watchtower \
  --restart always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --interval 60 \
  --cleanup \
  ablecloud-homepage
```

**주요 옵션 설명:**
- `-v /var/run/docker.sock:/var/run/docker.sock`: Watchtower가 다른 컨테이너를 제어하기 위해 필수인 설정입니다.
- `--interval 60`: 60초마다 새 이미지가 있는지 확인합니다. (원하는 주기로 변경 가능)
- `--cleanup`: 새 컨테이너 실행 후 오래된 이미지를 자동으로 삭제하여 디스크 용량을 확보합니다.
- `ablecloud-homepage`: 특정 컨테이너만 감시하도록 지정합니다. (생략 시 모든 컨테이너 감시)

## 4. (선택 사항) Private 저장소 사용 시

만약 Docker Hub 저장소가 비공개(Private)라면, Watchtower에 로그인 정보를 알려줘야 합니다.

```bash
docker run -d \
  --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -e REPO_USER=당신의_아이디 \
  -e REPO_PASS=당신의_패스워드_또는_토큰 \
  containrrr/watchtower \
  --interval 60 --cleanup ablecloud-homepage
```

## 5. 장점
- **무상태성**: VM이 GitHub와 직접 연결될 필요가 없어 보안상 유리합니다.
- **간편함**: 별도의 에이전트 설치나 업데이트가 필요 없습니다.
- **복구**: 이미지 푸시만으로 롤백이나 재배포가 가능합니다.
