
export interface Props {
  imgSrc: {
    logo: string;
    navBar: string;
    cart: string;
    search: string;
  };
}

const imgSrc = {
  logo: "https://img.imageboss.me/cdn/http://bimg.visie.com.br/2018/07/logo-brastemp-white.svg",
  navbar: "../static/icons8-menu-rounded-30.png",
  cart: "../static/icons8-shopping-cart-32.png",
  search: "../static/icons8-search-50.png",
};

export default function Header({ imgSrc }: Props) {
  return (
    <>
      <header className="bg-gradient-to-r from-orange bg-midtermcolor bg-red p-1 items-center flex justify-between">
        <div className="flex items-center">
          <img
            class=""
            sizes="(max-width: 140px)"
            src={imgSrc.navBar}
            width={24}
            height={24}
          />
          <p className="text-white text-uppercase text-[10px] font-bold">Menu</p>
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
            src={imgSrc.cart}
            width={28}
            height={28}
          />
        </div>
      </header>

      <div className="bg-gradient-to-r from-orange bg-midtermcolor bg-red  text-center h-10">
        <input
          className="w-[84vw] py-2 text-[10px] outline-none"
          type="text"
          placeholder="Pesquisar"
        />
        <img
          className="ml-[86vw] -mt-6"
          sizes="(max-width: 80px)"
          src={imgSrc.search}
          width={18}
          height={18}
        />
      </div>
    </>
  );
}
