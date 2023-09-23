import React from 'react'

const Success = () => {

    const mark = 'https://s3-alpha-sig.figma.com/img/e2e1/9142/90db3561bb6b7b698e99a45afb233e07?Expires=1696204800&Signature=S6AL60Yim59aYV0z3ZRXs1xv4JtgV02cAfZAyjx9lKaVvr7KHCvcAM02eWGo-NXhetG~Dxyo-cNLLgs2dsv9Hwnuxv~Qj9D7lIgBni9KI31-wQ1UJloHbf8LpuxNowzu~rQSTIGDEFBWHOzElKUCBePKdGhqjkNbWcPIoshFMrFEowynXU8ujpEh4t0ijB5eZZ7uP8xXke4MCnCtmAldnyd~eMEmVRumxG81ESeyat4FGWsxYjIgFwp4xZ7JcvcAd2YoLcqbIn~nz8lkS5-xIVz3LQEND9PJLv8l0Qs30avBcEAv80GiVyMDGtDUWn6MqqStZ8PLu7LlkrAWpMgCpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

    const person = 'https://s3-alpha-sig.figma.com/img/a532/28ce/a878ee51ec068b6c89c7494423ecc61c?Expires=1696204800&Signature=Awp20RhSGQZbk3ZQnR3eu977P2mY3ypZ2oN87R591piSxtcO4n-Yeu6VPrhtLgcTEmJco1VDu24G26pJwUpvejvAQu~BJYG403Nj3~GvwRp1DV5P34NuIY5VAcqWrh3sY2SlwAuP0kqRF2IgVEp9O7JYWyCXEKs0kdrfALDvBNr1z8lzSaPWhySZAzcQWL7U-QTM620bSauNf7Mn5ev1FiMPKwWkg2MaQSzIqWUEFkSYUlxEpmNd7q0i~OQ1rUcsW1VCcCjgWlxykLirub0UFYaUB0VNLV2c8kEP6HIFIRm4RggjtW~aRmwTox5mj0Rrtt9cYFVBMltUMV-7LXQ7Aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

  return (
    <section className='absolute w-full top-0 flex justify-center mx-auto items-center bg-black bg-opacity-80 pb-20 overflow-hidden'>
      <article className='flex flex-col gap-3 p-10 text-center md:w-1/2'>
        <div className='flex relative gap-20 mx-auto'>
            <img src={mark} alt="" />
            <img src={person} alt="" className='absolute' />
        </div>
        <p className='text-[25px] font-semibold'>Congratulations you have successfully Registered!</p>
        <p>Yes, it was easy and you did it!</p>
        <p>Check your mail box for next step</p>
        <button className='btn w-2/3 mx-auto'>Back</button>
      </article>
    </section>
  )
}

export default Success
