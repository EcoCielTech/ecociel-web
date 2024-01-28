import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Verified by Popular Carbon Auditors</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Verified by Both Gold Standard and VCS standard.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-2">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M959.849 634.644c-1.641-76.786-201.052-97.358-319.152-97.358s-317.509 20.572-319.152 97.358h-0.151v99.162c0 77.374 200.715 98.006 319.303 98.006 118.59 0 319.303-20.75 319.303-98.464v-98.703h-0.151z" fill="#FCB814"></path><path d="M959.849 634.644c-1.641-76.786-201.052-97.358-319.152-97.358s-317.509 20.572-319.152 97.358h-0.151v99.162c0 77.374 200.715 98.006 319.303 98.006 118.59 0 319.303-20.75 319.303-98.464v-98.703h-0.151z" fill=""></path><path d="M640.697 733.78c-118.588 0-319.303-20.675-319.303-98.222 0-77.571 200.715-98.272 319.303-98.272S960 557.987 960 635.558c0 77.547-200.715 98.222-319.303 98.222z" fill="#FCB814"></path><path d="M837.826 455.421c-1.641-76.786-201.052-97.356-319.152-97.356s-317.51 20.57-319.152 97.356h-0.151v99.162c0 77.376 200.714 98.006 319.303 98.006 118.588 0 319.303-20.75 319.303-98.463v-98.705h-0.151z" fill="#FCB814"></path><path d="M837.826 455.421c-1.641-76.786-201.052-97.356-319.152-97.356s-317.51 20.57-319.152 97.356h-0.151v99.162c0 77.376 200.714 98.006 319.303 98.006 118.588 0 319.303-20.75 319.303-98.463v-98.705h-0.151z" fill=""></path><path d="M518.674 554.559c-118.59 0-319.303-20.677-319.303-98.223 0-77.571 200.713-98.272 319.303-98.272 118.588 0 319.303 20.701 319.303 98.272 0 77.547-200.715 98.223-319.303 98.223z" fill="#FCB814"></path><path d="M702.457 289.547c-1.642-76.786-201.052-97.358-319.152-97.358S65.794 212.761 64.153 289.547h-0.15v99.162c0 77.374 200.713 98.006 319.303 98.006 118.589 0 319.303-20.75 319.303-98.464v-98.703h-0.152z" fill="#FCB814"></path><path d="M702.457 289.547c-1.642-76.786-201.052-97.358-319.152-97.358S65.794 212.761 64.153 289.547h-0.15v99.162c0 77.374 200.713 98.006 319.303 98.006 118.589 0 319.303-20.75 319.303-98.464v-98.703h-0.152z" fill=""></path><path d="M383.303 388.683C264.715 388.683 64 368.007 64 290.46c0-77.571 200.715-98.272 319.303-98.272 118.59 0 319.304 20.701 319.304 98.272 0.001 77.547-200.714 98.223-319.304 98.223z" fill="#FCB814"></path><path d="M143.75 327.758c-8.246 0-14.933-6.687-14.933-14.933 0-84.948 213.581-89.25 256.398-89.25 8.246 0 14.933 6.686 14.933 14.933 0 8.246-6.687 14.933-14.933 14.933-111.352 0-226.531 22.21-226.531 59.384-0.001 8.246-6.686 14.933-14.934 14.933z" fill="#EEEEEE"></path></g></svg>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
              <svg fill="#000000" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M8,6.22V4H7V5.75l-1,1-1-1V4H4V6.22l2,2ZM1,1V11H11V1ZM9,9H3V3H9Z"></path> </g> </g></svg>
            </div>

          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}