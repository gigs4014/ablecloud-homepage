import { Button, CustomLink } from '@/components/common';
import { Container } from '@/components/layout';

export default function ContactPage() {
  return (
    <>
      <Container.Article enableProseSpacing={true}>
        <Container.PageWidth separateWithPeer invertBg className='text-center'>
          <h1>기술지원 및 데모요청</h1>

          <p>
            ABLESTACK 전체 제품에 대한 기술지원 및 데모지원 서비스를 제공합니다. 다음의 양식에
            기술지원 요청 내용을 작성하신 후 이메일을 보내면 담당자 확인 후 회신하여 드립니다.
          </p>
        </Container.PageWidth>

        <Container.PageWidth separateWithPeer invertBg>
          <ContactForm />
        </Container.PageWidth>

        <Container.PageWidth separateWithPeer invertBg>
          <h2 className='text-center'>영업 / 기술지원 이메일</h2>

          <div className='not-prose flex space-x-1 self-center'>
            <div className='flex flex-col text-neutral-600'>
              <p>영업 / 마케팅</p>
              <p>기술지원</p>
            </div>

            <div className='flex flex-col'>
              <CustomLink href='mailto://sky@ablestor.com' className='before:content-[":_"]'>
                sky@ablestor.com
              </CustomLink>
              <CustomLink href='mailto://support@ablecloud.io' className='before:content-[":_"]'>
                support@ablecloud.io
              </CustomLink>
            </div>
          </div>
        </Container.PageWidth>

        <Container.PageWidth separateWithPeer invertBg className='text-center'>
          <h2>온라인 도큐먼트 센터</h2>

          <p>
            제품 문서 및 사용자 설명서 등을 통해 온라인으로 필요한 기능과 참조 문서를 확인할 수
            있습니다. 고객은 언제든지 필요한 사례를 확인할 수 있습니다.
          </p>

          <div>
            <CustomLink href={'https://docs.ablecloud.io/'}>
              <Button>도큐먼트 센터 바로가기</Button>
            </CustomLink>
          </div>
        </Container.PageWidth>
      </Container.Article>
    </>
  );
}

function ContactForm() {
  return (
    <form
      name='sentMessage'
      id='contactForm'
      noValidate
      action='https://formspree.io/f/mzbygdrk'
      method='post'
      className='flex flex-col space-y-8'>
      <input type='hidden' name='_subject' value='새로운 기술지원 요청이 있습니다.' />
      <input type='text' name='_gotcha' className='hidden' />

      <div className='space-y-4'>
        <div className='flex flex-col'>
          <label className='mb-1 border-l-0.5 border-transparent pl-2 text-sm text-neutral-600'>
            이름
          </label>
          <input
            type='text'
            className='rounded-md p-2 shadow-[inset_0_2px_4px_0] shadow-neutral-200'
            placeholder='이름을 입력하세요.'
            id='name'
            name='name'
            required
            data-validation-required-message=''
          />
          <div className='help-block text-danger'></div>
        </div>
        <div className='flex flex-col'>
          <label className='mb-1 border-l-0.5 border-transparent pl-2 text-sm text-neutral-600'>
            이메일
          </label>
          <input
            type='email'
            className='rounded-md p-2 shadow-[inset_0_2px_4px_0] shadow-neutral-200'
            placeholder='이메일 주소를 입력하세요.'
            id='email'
            name='email'
            required
            data-validation-validemail-message=''
            data-validation-required-message=''
          />
          <div className='help-block text-danger'></div>
        </div>
        <div className='flex flex-col'>
          <label className='mb-1 border-l-0.5 border-transparent pl-2 text-sm text-neutral-600'>
            기술지원요청 내용
          </label>
          <textarea
            rows={5}
            className='rounded-md p-2 shadow-[inset_0_2px_4px_0] shadow-neutral-200'
            placeholder='기술지원을 요청할 내용을 입력하세요. 요청 구분(제품소개, 데모요청, 기술지원), 회사, 담당자, 기술지원요청 목적 등을 명확하게 알 수 있도록 작성해 주십시오. 내용 확인 후 바로 회신 드리겠습니다.'
            id='message'
            name='message'
            required
            data-validation-required-message=''
          />
          <div className='help-block text-danger'></div>
        </div>
      </div>

      <div className='self-center'>
        <Button type='submit' id='sendMessageButton'>
          기술지원요청 이메일 보내기
        </Button>
      </div>
    </form>
  );
}
