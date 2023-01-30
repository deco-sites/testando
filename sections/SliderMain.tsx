
export interface Props {
    imgSlider: { slider: string }
}

const imgSlider = {
    slider:
    "https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/fc551851-8ba8-476a-a89a-466fe2189d5d___910b38c054c76653e81b2486857623c6.gif"
}

export default function SliderMain() {
    return(
        <main>
            <img
            class="w-full h-[52vh]"
            media="(min-width: 768px)"
            src={imgSlider.slider}
            />
        </main>
    )
}