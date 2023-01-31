
export interface Props {
  imgSlider: {
  slider: string,
  slider1: string,
  slider2: string,
  };
}

const imgSlider = {
  slider:"https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/f5fccd1d-889a-41fb-9467-53cb52ffc6f2___9316f8980812074875b1bfcf3c855608.gif",
  slider1:"https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/b1ba3948-5db3-4aca-a749-8ef8472bcaa4___815b33f2751e16ec127a96238ff176d5.gif",
  slider2:"https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/0ef55505-1804-48cd-884a-dd66e6c16ef7___783027431725b84f5bd15136c577604e.gif"

};

export default function SliderMain({imgSlider} : Props) {
  return (
    <main>
        <img
         class="w-full h-[52vh]"
         media="(min-width: 768px)"
         src={imgSlider.slider}
       />
    </main>
   
  );
}
