import {getProductById} from "@/modules/api/products";
import {Product} from "@/modules/schema/product";
import {redirect} from "next/navigation";
import {getUser} from "@/modules/api/account";
import axios from 'axios';
import ATCButton from "@/components/ATCButton";

interface Props {
    params: {
        id: string
    }
}
export default async function ProductPage({params}: Props) {
    const product = await getProductById(params.id)
    if (!product) redirect('/404');
    const user  = await getUser()




    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full objclassNameover object-contain"
                                     src={product.photo!}
                                     alt="Product Image"/>
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <ATCButton {...product}/>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {product?.description}
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                    <span className="text-gray-600 dark:text-gray-300">{product.price / 100}$</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                    <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                                <div className="flex items-center mt-2">
                                    <button className="w-6 h-6 rounded-fclassNameg-gray-800 dark:bg-gray-200 mr-2"></button>
                                    <button className="w-6 h-6 rounded-fclassNameg-red-500 dark:bg-red-700 mr-2"></button>
                                    <button className="w-6 h-6 rounded-fclassNameg-blue-500 dark:bg-blue-700 mr-2"></button>
                                    <button
                                        className="w-6 h-6 rounded-fclassNameg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                <div className="flex items-center mt-2">
                                    <button
                                        className="bg-gray-300 dark:classNameay-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S
                                    </button>
                                    <button
                                        className="bg-gray-300 dark:classNameay-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M
                                    </button>
                                    <button
                                        className="bg-gray-300 dark:classNameay-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L
                                    </button>
                                    <button
                                        className="bg-gray-300 dark:classNameay-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL
                                    </button>
                                    <button
                                        className="bg-gray-300 dark:classNameay-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL
                                    </button>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {product?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
