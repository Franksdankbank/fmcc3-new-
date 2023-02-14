import CustomComponent from "@/Components/CustomComponent/CustomComponent";
import Button from "@/Components/Button/Button";

export default function About() {
  return (
    <div >
      Whatever name you want here
      <CustomComponent><div>HEllo</div></CustomComponent>
      <Button label="Return to Main Page" href =""/>
    </div>
  )
}