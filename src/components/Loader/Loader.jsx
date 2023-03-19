import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return(
    <ThreeDots
    height="13"
    width="51"
    radius="9"
    color="#FFFFFF"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
  )
}
