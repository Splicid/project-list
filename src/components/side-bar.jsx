import "./styles/side-bar.css"
import myImage from "../assets/character.jpg"
import githubLogo from "../assets/GitHub_Logo_White.png";

const app = () => {
    return (
        
        <div className="font-sans text-slate-300">
            <div className="w-screen h-screen bg-neutral-800 flex flex-row">
                <div className="flex flex-col bg-slate-750 basis-2/6 p-2 overflow-y-auto">
                    <img src={myImage} alt="Image" className="rounded-full w-24 h-24 mx-auto mt-10 mb-10" />
                    <div className="text-md font-medium"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam beatae dolorem sequi sed. Odio quod in quasi, 
                        eaque corporis excepturi libero vero tenetur perspiciatis magni, quo tempore aspernatur. Eveniet, praesentium.
                    </div>
                    <a href="https://github.com/Splicid"> <img src={githubLogo}  alt="Github" className="object-scale-down h-28 w-56 mx-auto" /></a>
                </div>
                <div className="flex flex-col basis-5/6 bg-slate-900 relative overflow-x-auto">
                    <div className="max-w-screen h-48 m-8"> Test</div>
                    <table class="w-auto text-sm text-left text-gray-500 dark:text-gray-400 m-4">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Silver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default app;