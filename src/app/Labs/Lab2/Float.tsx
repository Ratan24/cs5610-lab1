import Image from "next/image";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>

      {/* Exercise 1: Floating divs */}
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <Image
          className="wd-float-right"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship"
          width={150}
          height={100}
        />
        <div className="wd-float-done"></div>
      </div>

      {/* Exercise 2: Floating images with text */}
      <div>
        <Image
          className="wd-float-right"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship"
          width={150}
          height={100}
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic
        ipsam consequatur saepe, laudantium quam quasi quae perspiciatis quo
        maxime error tenetur repudiandae necessitatibus veritatis obcaecati
        quisquam at itaque a? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eius hic ipsam consequatur saepe, laudantium quam
        quasi quae perspiciatis quo maxime error tenetur repudiandae
        necessitatibus veritatis obcaecati quisquam at itaque a?
        <Image
          className="wd-float-left"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship"
          width={150}
          height={100}
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic
        ipsam consequatur saepe, laudantium quam quasi quae perspiciatis quo
        maxime error tenetur repudiandae necessitatibus veritatis obcaecati
        quisquam at itaque a? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eius hic ipsam consequatur saepe, laudantium quam
        quasi quae perspiciatis quo maxime error tenetur repudiandae
        necessitatibus veritatis obcaecati quisquam at itaque a?
        <div className="wd-float-done"></div>
      </div>
    </div>
  );
}