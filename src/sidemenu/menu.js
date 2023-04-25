export default function Menu({item}){
    return(<div className="block">
    <div className="svg">{item.icon}</div>
    <p className="p">{item.name}</p>
  </div>);
}