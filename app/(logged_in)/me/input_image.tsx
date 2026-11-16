import changePfp from "@/actions/change_pfp";

const InputImage = () => {
  return (
    <div>
      <input className='w-[20vw] h-[50] border border-gray-800 text-xs rounded-md mt-2 border-dashed' type="file" accept="image/*" onChange={(e) => {
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
  )
}

export default InputImage
