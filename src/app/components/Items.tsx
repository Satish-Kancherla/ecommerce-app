import Link from "next/link";

const Item = (props:any) => {
    return (
      <div className="w-[300px] transform transition-transform duration-600 hover:scale-105">
       
        <Link href={`/dashboard/products/${props.id}`}>
          <img src={props.image} alt='' className="w-full"/>
        </Link>
        <p className="my-[6px]">{props.name}</p>
        <div className="flex gap-[20px]">
          <div className="text-[#374151] text-[18px] font-semibold">
            RS {props.new_price}
          </div>
          <div className="text-[#8c8c8c] text-[18px] font-semibold line-through">
            RS {props.old_price}
          </div>
        </div>
      </div>
    )
  }

  export default Item;