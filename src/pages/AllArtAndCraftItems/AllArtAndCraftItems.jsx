import { useContext } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AllArtAndCraftItems = () => {
  const allCraftItems = useLoaderData();
  const { user } = useContext(AuthContext) || {};
  // console.log(allCraftItems);

  return (
    <section className="container px-4 mx-auto p-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">All craft Items</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {allCraftItems.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Item Name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Subcategory Name</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Description</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Price
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {allCraftItems.map((item) => (
                    <tr key={item._id} className="hover:bg-base-200">
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {item.item_name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {item.subcategory_name}
                      </td>

                      <td
                        title={item.short_description}
                        className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap"
                      >
                        {item.short_description.substring(0, 20)}...
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className={`px-3 py-1 
                              ${
                                item.category === "Landscape Painting" &&
                                "text-red-500 bg-red-100/60" 
                              }
                              ${item.category === "Portrait Drawing" && 
                              "text-green-500 bg-green-100/60"
                              }
                              ${item.category === "Watercolour Painting" &&
                              "text-orange-500 bg-orange-100/60"
                              }
                              ${item.category === "Oil Painting" &&
                              "text-pink-500 bg-pink-100/60"
                              }
                              ${item.category === "Charcoal Sketching" &&
                              "text-blue-500 bg-blue-100/60"
                              }
                              ${item.category === "Cartoon Drawing" &&
                              "text-lime-500 bg-lime-100/60"
                              }
                              rounded-full text-xs`}
                          >
                            {item.category}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {item.price}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-gray-500 transition-colors duration-200 text-base hover:text-red-500 focus:outline-none">
                            <RiDeleteBinLine />
                          </button>

                          <Link to={`/update/${item._id}`} className="text-gray-500 transition-colors duration-200 text-base hover:text-yellow-500 focus:outline-none">             
                            <FaEdit />
                          </Link>

                          <Link to={`/craftItems/${item._id}`} className="text-gray-500 transition-colors duration-200 text-base hover:text-green-500 focus:outline-none">             
                            <FaEye />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllArtAndCraftItems;
