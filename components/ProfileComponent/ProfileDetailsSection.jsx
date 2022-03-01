import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaEye, FaHashtag, FaHeart, FaTrash, FaUserFriends, FaDollarSign, FaFlag } from "react-icons/fa";

const ProfileDetailsSection = () => {
    const handleDelete = () => {
        console.log('clicked')
    }
    const handleView = () => {
        console.log('clicked')
    }

    return (
        <div>
            <div className="p-5">
                <Tabs>
                    <TabList className="grid grid-cols-4 mb-5 text-center gap-2 border-b-2 border-black">
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Topics</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Courses</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Progress</Tab>
                        <Tab className="bg-transparent border-0 shadow-none text-lg px-2 py-1.5 mx-1 font-medium">Settings</Tab>
                    </TabList>

                    <div className="tab-panes">
                        <TabPanel className="p-5">
                            <div className="overflow-x-auto">
                                <table className="table w-full bg-slate-200 overflow-scroll">
                                    <tbody>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="font-semibold">Radiant Academy turned 2 today!</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaHashtag className="mr-1.5" /> Welcome
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaEye className="mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-1.5 text-red-500" /> 304
                                                </span>
                                            </td>
                                            <td className="text-center text-orange-500">Pending</td>
                                            <td>
                                                <button onClick={handleDelete}>
                                                    <FaTrash className="hover:text-red-500" />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="font-semibold">Radiant Academy turned 1 today!</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaHashtag className="mr-1.5" /> Welcome
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaEye className="mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-1.5 text-red-500" /> 304
                                                </span>
                                            </td>
                                            <td className="text-center text-green-600">Approved</td>
                                            <td>
                                                <button onClick={handleDelete}>
                                                    <FaTrash className="hover:text-red-500" />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <div className="overflow-x-auto">
                                <table className="table w-full bg-slate-200 overflow-scroll">
                                    <tbody>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="font-semibold">Course Name</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaDollarSign className="text-lg" />59.5
                                                </span>
                                            </td>
                                            <td className="text-center text-green-600 font-semibold uppercase">Premium</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-1.5 text-red-500" /> 304
                                                </span>
                                            </td>
                                            <td className="text-center text-orange-500 font-semibold">Pending</td>
                                            <td>
                                                <button className="btn btn-ghost py-0  uppercase" onClick={handleView}>
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="font-semibold">Course Name</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaDollarSign className="text-lg" />59.5
                                                </span>
                                            </td>
                                            <td className="text-center text-green-600 font-semibold uppercase">Premium</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-1.5 text-red-500" /> 304
                                                </span>
                                            </td>
                                            <td className="text-center text-orange-500 font-semibold">Completed</td>
                                            <td>
                                                <button className="btn btn-ghost py-0" onClick={handleView}>
                                                    VIEW
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <div className="overflow-x-auto">
                                <table className="table w-full bg-slate-200 overflow-scroll">
                                    <tbody>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="text-lg font-semibold">Quiz Name</td>
                                            <td className="text-green-600 font-semibold uppercase">Premium</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </td>
                                            <td className="text-green-600 font-semibold">Completed</td>
                                        </tr>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="text-lg font-semibold">Quiz Name</td>
                                            <td className="text-green-600 font-semibold uppercase">Premium</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </td>
                                            <td className="text-green-600 font-semibold">Completed</td>
                                        </tr>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="text-lg font-semibold">Course Name</td>
                                            <td className="text-green-600 font-semibold uppercase">Premium</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 50%
                                                </span>
                                            </td>
                                            <td className="text-green-600 font-semibold">Completed</td>
                                        </tr>
                                        <tr className="bg-slate-200">
                                            <td colSpan={2} className="text-lg font-semibold">Course Name</td>
                                            <td className="text-green-600 font-semibold uppercase">Premium</td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaUserFriends className="text-2xl mr-1.5 text-purple-800" /> 1213
                                                </span>
                                            </td>
                                            <td>
                                                <span className="flex items-center">
                                                    <FaFlag className="mr-1.5 text-lg" /> 100%
                                                </span>
                                            </td>
                                            <td className="text-green-600 font-semibold">Completed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel className="px-5 pt-0">
                            <div className="flex justify-center items-center">
                                <h1 className="text-4xl font-semibold text-purple-800">Coming Soon!</h1>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ProfileDetailsSection;