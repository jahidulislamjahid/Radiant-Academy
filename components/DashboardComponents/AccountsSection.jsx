import React from 'react';
import { FaHeart, FaPenNib, FaPlus, FaTrashAlt, FaUserFriends, FaUsers } from "react-icons/fa";
import { useSelector } from 'react-redux';
import DashboardSidebar from './DashboardSidebar';

const AccountsSection = () => {
    const allUsers = useSelector((state) => state.users.usersList);

    return (
        <div className="px-0 sm:px-6 lg:px-12 bg-white dark:bg-slate-800">
            <div className="grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] p-8 gap-5">
                <div>
                    <DashboardSidebar />
                </div>

                <div className="bg-slate-100 dark:bg-slate-700 dark:text-slate-200 shadow-md rounded-md py-8 px-5 h-auto">
                    <div className="flex justify-between items-center px-3 mb-4">
                        <h3 className="text-2xl flex items-center"><FaUsers className="mr-3" /> Accounts</h3>
                        <button className="flex items-center btn"><FaPlus className="text-sm mr-2" /> Add Accounts</button>
                    </div>
                    <section className="overflow-x-auto">
                        <div className="w-full bg-slate-200 dark:bg-slate-700 overflow-y-scroll pr-2">
                            <>
                                {
                                    allUsers?.map(user => (
                                        <div className='container grid md:grid-cols-6 xs:grid-cols-1 px-5 bg-white dark:bg-slate-600 rounded-md mb-2 py-4 shadow-md dark:shadow-slate-600' key={user._id}>
                                            <div className='col-span-2'>
                                                <h1 className='text-white inline-flex'>
                                                    <span className="text-orange-500 my-auto mr-1.5">
                                                        <FaUserFriends />
                                                    </span>
                                                    {user.displayName}
                                                </h1>
                                            </div>

                                            <h1 className='inline-flex'>
                                                <span className="flex items-center justify-center">
                                                    <FaPenNib className="mr-1.5 text-purple-800" />
                                                </span>
                                                1648
                                            </h1>
                                            <h1 className='inline-flex font-base justify-center'>
                                                <span className='my-auto text-rose-600 dark:text-rose-400 mr-1'>
                                                    <FaHeart />
                                                </span>
                                                1258
                                            </h1>
                                            <h1 className='text-green-700 dark:text-green-500 font-semibold flex justify-center'>Approved</h1>
                                            <h1 className='inline-flex justify-end'>
                                                <span className='text-red-500 dark:text-red-400'>
                                                    <FaTrashAlt />
                                                </span>
                                            </h1>
                                        </div>
                                    )
                                    )}
                            </>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AccountsSection;