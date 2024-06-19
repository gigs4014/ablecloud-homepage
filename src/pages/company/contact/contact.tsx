import { Button, CustomLink } from '@/components/common';
import { Container } from '@/components/layout';

export default function ContactPage() {
  return (
    <>
      <Container.Article enableProseSpacing={true}>
        <Container.PageWidth separateWithPeer invertBg className='mt-20 pt-8'>
          <div className='mb-6 text-center text-[30px] font-medium'>제품 문의</div>
          <ContactForm />
        </Container.PageWidth>

        <Container.PageWidth
          separateWithPeer
          invertBg
          className='px-4 text-center'
          containerClassName={'bg-[#EFEFEF]'}>
          <h2 style={{ margin: '0  0 24px 0' }}>온라인 도큐먼트 센터</h2>

          <p className='text-[16px]'>
            제품 문서 및 사용자 설명서 등을 통해 온라인으로 필요한 기능과 참조 문서를 확인할 수
            있습니다. 고객은 언제든지 필요한 사례를 확인할 수 있습니다.
          </p>

          <div>
            <CustomLink href={'https://docs.ablecloud.io/'}>
              <Button className='!bg-[#2BBBE6] px-16 text-[16px] font-bold'>
                제품 사용 설명서
              </Button>
            </CustomLink>
          </div>
        </Container.PageWidth>

        <Container.PageWidth
          separateWithPeer
          invertBg
          className='mt-0'
          containerClassName={'bg-[#EEF7FF]'}>
          <h2 className='text-center' style={{ margin: '0 0 24px 0' }}>
            영업 / 기술지원 이메일
          </h2>

          <div className='not-prose flex space-x-1 self-center'>
            <div className='flex flex-col text-[16px] text-neutral-600'>
              <p>영업 / 마케팅: sky@ablestor.com</p>
              <p>기술지원: support@ablecloud.io</p>
            </div>
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
      action='https://formspree.io/f/mzbygdrk'
      method='post'
      className='mx-auto flex w-full max-w-[887px] flex-col justify-items-center px-4 text-[#444]'>
      <input type='hidden' name='_subject' value='새로운 기술지원 요청이 있습니다.' />
      <input type='text' name='_gotcha' className='hidden' />

      <div
        className='border-y-2  border-black'
        style={{ borderCollapse: 'collapse', display: 'table' }}>
        <div className='flex flex-col sm:flex-row'>
          <div className='flex w-full sm:w-[50%]'>
            <div className='border-x-1 border-b-1 border-[#EEEEEE] bg-[#F4F4F4] px-3 py-4'>
              <div className='flex h-[18px] w-[96px] text-[14px]'>
                <span className='mr-1 text-[#0066FF]'>*</span>이름
              </div>
            </div>
            <div className='w-full border-b-1 border-[#EEEEEE] px-4 py-2'>
              <input
                type='text'
                className='w-full border-1 border-[#EEEEEE] px-2 text-[14px]'
                id='name'
                name='name'
                required
              />
            </div>
          </div>
          <div className='flex w-full sm:w-[50%]'>
            <div className='border-x-1 border-b-1 border-[#EEEEEE] bg-[#F4F4F4] px-3 py-4'>
              <div className='flex h-[18px] w-[96px] text-[14px]'>
                <span className='mr-1 text-[#0066FF]'>*</span>업체명
              </div>
            </div>
            <div className='w-full border-b-1 border-[#EEEEEE] px-4 py-2'>
              <input
                type='text'
                className='w-full border-1 border-[#EEEEEE] px-2 text-[14px]'
                id='companyName'
                name='companyName'
                required
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <div className='flex w-full sm:w-[50%]'>
            <div className='border-x-1 border-b-1 border-[#EEEEEE] bg-[#F4F4F4] px-3 py-4'>
              <div className='flex h-[18px] w-[96px] text-[14px]'>
                <span className='mr-1 text-[#0066FF]'>*</span>직함
              </div>
            </div>
            <div className='w-full border-b-1 border-[#EEEEEE] px-4 py-2'>
              <input
                type='text'
                className='w-full border-1 border-[#EEEEEE] px-2 text-[14px]'
                id='title'
                name='title'
                required
              />
            </div>
          </div>
          <div className='flex w-full sm:w-[50%]'>
            <div className='border-x-1 border-b-1 border-[#EEEEEE] bg-[#F4F4F4] px-3 py-4'>
              <div className='flex h-[18px] w-[96px] text-[14px]'>
                <span className='mr-1 text-[#0066FF]'>*</span>이메일
              </div>
            </div>
            <div className='w-full border-b-1 border-[#EEEEEE] px-4 py-2'>
              <input
                type='text'
                className='w-full border-1 border-[#EEEEEE] px-2 text-[14px]'
                id='email'
                name='email'
                required
              />
            </div>
          </div>
        </div>
        <div className='flex w-full'>
          <div className='flex items-center border-x-1 border-[#EEEEEE] bg-[#F4F4F4] px-3 py-4'>
            <div className='flex h-[18px] w-[96px] text-[14px]'>문의내용</div>
          </div>
          <div className='w-full px-4 py-2'>
            <textarea
              rows={10}
              className='w-full border-1 border-[#EEEEEE] px-2 text-[14px]'
              id='message'
              name='message'
            />
          </div>
        </div>
      </div>

      <div className='mt-8 self-center'>
        <Button type='submit' className='!bg-[#2BBBE6] px-20 text-[16px] font-bold text-white'>
          문의하기
        </Button>
      </div>
    </form>
  );
}
