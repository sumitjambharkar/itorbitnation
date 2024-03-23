import Image from "next/image"

const page = () => {
  return (
    <section class="hero-section">
  <div class="container">
    <div class="hero-content">
    <h1 class="hero-title">Microdosing synth tattooed vexillologist</h1>
      <Image width={100} height={650} src="https://res.cloudinary.com/dsrc5z9na/image/upload/v1701769162/New_Project_57_sqba4z.png" alt="hero image" class="hero-image"/>
      <div class="text-content">
        
        <p class="hero-description">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
        <div class="button-container">
          {/* <button class="primary-button">Button</button> */}
          
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default page