export interface Props {
    imgsDestaques:{
        destaque: string,
        destaque1: string,
        destaque2: string,
    }
}

const imgsDestaques = {
    destaque:"https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/7c49ae0e-9eae-4801-a9fe-053220ee85c5___c82f9ebd23e8a11be95becd1697e88fb.png",
    destaque1:"https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/5a92c185-05f8-40e1-af4d-f9ff22e3d6ec___6d7c1642177509f4bd9b07bac123258a.png",
    destaque2:"https://brastemp.vtexassets.com/assets/vtex.file-manager-graphql/images/71afef50-b80c-4c00-918c-b31c93c4ed5e___be26f4f2631a746f3658611325392283.png",
}

export default function Destaques({imgsDestaques} : Props) {
    return(
        <>
        <div className=" ml-[84px] sm:ml-[212px] mt-[6.2vh] xl:flex xl:ml-40
        xl:ml-[470px]
        ">
            <h4 className="text-gray-700 text-sm xl:text-2xl">Destaques <span className="text-primary font-bold text-sm xl:text-2xl">Brastemp</span></h4>
        </div>

        <div className="mt-2 flex justify-center">
            
            <div className="">
                <img className="w-[140px] xl:w-[180px]"  src={imgsDestaques.destaque} alt="" />
                <img className="w-[140px] xl:w-[180px] mt-[10px] sm:-mt-[166px] sm:ml-[160px] sm:mr-[20px] xl:ml-[200px] xl:-mt-[215px]" src={imgsDestaques.destaque2} alt="" />
            </div>

            <div className="ml-[10px] sm:-ml-[2px] ">
                <img className="w-[140px] xl:w-[180px]" src={imgsDestaques.destaque1} alt="" />
            </div>
        </div>


        </>
     
    )
}