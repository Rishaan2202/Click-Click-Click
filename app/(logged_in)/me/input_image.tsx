import changePfp from "@/actions/change_pfp";
import Link from "next/link";

const InputImage = () => {
  return (
    <>
      <Link className="absolute bg-[var(--burnt-peach)] right-0 top-0 w-fit m-4 p-2 rounded-xl" href="/home">Back to Home</Link>
      <div className='flex items-center justify-center'>
        <input className='text-center file:mx-auto w-[20vw] h-[10vh] border border-gray-800 text-xs rounded-md mt-2 border-dashed' type="file" accept="image/*" onChange={(e) => {

          const file = e.target.files![0];

          changePfp(file).then((result) => {
            if (result.success) {
              console.log("Profile picture updated successfully.");
            } else {
              console.error(result.message);
            }
          });

        }} />
      </div>
    </>
  )
}

export default InputImage
