
export interface Props {
  imgOfertasExclusivas: {
    ofertas: string;
    ofertas1: string;
    ofertas2: string;
  };
  imgPromoImperdivel: {
    promo: string;
    promo1: string;
    promo2: string;
  };
}

const imgOfertasExclusivas = {
  ofertas:
    "https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/b86f01f0-0a35-430b-b5de-a80029ed05d4___c006789c182de957340672814fba03c3.png",
  ofertas1:
    "https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/c4ddcdfb-7cad-4f92-9b1f-5ccd67070bcb___d40834faad119ef9662da1023929fcbc.png",
  ofertas2:
    "https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/7cf90e35-ea1d-4748-96d7-2e51f6c28bdc___0d3ef0b7923926e9b07d23680261952f.png",
};

const imgPromoImperdivel = {
  promo:
    "https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/139d8602-c2ed-4d5f-bb7b-254cfa3e95e2___8ebe5b0925bc5e5d588a6659de9e9552.png",
  promo1:
    "https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/47692bc1-87cd-472d-be9a-d78943b89bdf___13ca4798c407e8c775645dc425cfb0cc.png",
  promo2:
    "https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/10a1a285-1b39-4725-be48-f9f8f1e96afa___23411b9eaa31881ece4681a58dc861b9.png",
};

export default function Ofertas(
  { imgOfertasExclusivas, imgPromoImperdivel }: Props,
) {
  return (
    <>
      <div className="text-center mt-[6.2vh] xl:flex xl:ml-40">
        <h4 className="text-gray-600 text-sm xl:text-2xl">
          Ofertas{" "}
          <span className="text-primary text-sm font-bold xl:text-2xl">
            Exclusivas
          </span>
        </h4>
      </div>

      <div className="flex flex-col items-center mt-[2vh] md:flex-row md:justify-around md:gap-6 md:w-1/2 md:text-center md:m-auto
            xl:flex-row xl:justify-around xl:w-[80vw] xl:m-auto 
            ">
        <img
          className="w-[260px] md:mt-[1.4vh] md:w-[200px] lg:w-[260px] xl:w-[420px]"
          src={imgOfertasExclusivas.ofertas}
        />

        <img
          className="w-[260px] mt-[1.4vh] md:w-[200px] lg:w-[260px] xl:w-[420px]"
          src={imgOfertasExclusivas.ofertas1}
        />

        <img
          className="w-[260px] mt-[1.4vh] md:w-[200px] lg:w-[260px] xl:w-[420px]"
          src={imgOfertasExclusivas.ofertas2}
        />
      </div>

      <div className="mt-4 xl:flex xl:ml-40">
        <h4 className="ml-12 sm:ml-56 lg:ml-72 text-gray-600 md:ml-20 
            lg:ml-[220px] xl:ml-40 text-sm xl:text-2xl 
            2xl:-ml-8 2xl:-ml-[12px] lg:-ml-[-190px]">
          Promoções{" "}
          <span className="text-primary text-sm font-bold xl:text-2xl">
            Imperdíveis
          </span>
        </h4>
      </div>

      <div className="ml-12 sm:-mt-2 flex items-center w-[80vw]
            md:flex-row gap-6 md:w-full md:justify-center md:-ml-4 2xl:-mt-4 2xl:ml-[0.3px]
            lg:ml-2
            ">
        <img
          className="w-[220px] md:mt-[1.4vh] md:w-[360px] lg:w-[480px] xl:w-[680px]"
          src={imgPromoImperdivel.promo}
        />

        <div className=" lg:-mt-3 xl:mt-7">
          <img
            className="w-[320px] mt-[1.4vh] md:w-[300px] lg:w-[330px] xl:w-[540px] "
            src={imgPromoImperdivel.promo1}
          />

          <img
            className="w-[320px] mt-[1.4vh] md:w-[300px] lg:w-[330px] xl:w-[540px]"
            src={imgPromoImperdivel.promo2}
          />
        </div>
      </div>
    </>
  );
}
