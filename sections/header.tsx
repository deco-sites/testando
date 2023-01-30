import Image from "$live/std/ui/components/Image.tsx";

export interface Props {
  imgSrc: {
    logo: string;
    navBarToggle: string;
    cartToggle: string;
    searchToggle: string;
  };
}

const imgSrc = {
  logo:
    "https://img.imageboss.me/cdn/http://bimg.visie.com.br/2018/07/logo-brastemp-white.svg",
  navBarToggle: "https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png",
  cartToggle: "https://img.icons8.com/windows/32/000000/shopping-cart.png",
  searchToggle: "https://img.icons8.com/ios-filled/50/000000/search--v1.png",
};

export default function Header({ imgSrc }: Props) {
  return (
    <>
      <header className="bg-gradient-to-r from-orange bg-midtermcolor bg-red p-1 items-center flex justify-between">
        <div className="flex items-center">
          <img
            class="text-white"
            sizes="(max-width: 140px)"
            src={imgSrc.navBarToggle}
            width={24}
            height={24}
          />
          <p className="text-white text-uppercase text-menu font-bold">Menu</p>
        </div>

        <div>
          <img
            src={imgSrc.logo}
            width={92}
            height={92}
          />
        </div>

        <div>
          <img
            className="text-white"
            sizes="(max-width: 140px)"
            src={imgSrc.cartToggle}
            width={28}
            height={28}
          />
        </div>
      </header>

      <div className="bg-gradient-to-r from-orange bg-midtermcolor bg-red  text-center h-10">
        <input
          className="w-[84vw] py-2 text-pesquisar outline-none"
          type="text"
          placeholder="Pesquisar"
        />
        <img
          className="ml-[86vw] -mt-6"
          sizes="(max-width: 80px)"
          src={imgSrc.searchToggle}
          width={18}
          height={18}
        />
      </div>
    </>
  );
}
