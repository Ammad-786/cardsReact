import React from 'react';

const Contact= () => {

    return (
      <div className="container mx-auto  p-12 bg-black">
            <div className="flex flex-wrap mx-auto justify-center text-center">
                <div className="w-full md:w-1/2 px-4 py-6 border-2 border-white rounded-2xl">
                    <div className="card22">
                      <div className="card-header bg-gray-300 text-black font-bold py-3 px-6 mb-0">
                        Contact Us
                      </div>
                      <div className="card-body px-6 py-4">
                        <p className="text-white mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim.
                        </p>
                        <form className=" max-w-sm flex flex-col mx-auto justify-center">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="name">
                                Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="email">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="jane@example.com" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="message">
                                Message
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="message" rows="5" placeholder="Write your message here..."></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Send
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Contact