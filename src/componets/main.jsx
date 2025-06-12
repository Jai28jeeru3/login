import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function CardSlider() {
  return (
    <Slider {...settings}>
      <div>
        <div className="w-3/4 m-auto ">
          <div className="md:w-72 m-9 opacity-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
            <div className="p-5 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-white">
                Hosting
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-normal text-black dark:text-gray-400">
                <ul className="ul-list">
                  <li>2 GB Storage</li>
                  <li>1 Website</li>
                  <li>5 GB Bandwidth</li>
                  <li>5 Email Accounts</li>
                  <li>3 Sub Domains</li>
                  <li>1 Mysql Database</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-3/4 m-auto ">
          <div className="md:w-80 m-9 opacity-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
            <div className="p-5 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-white">
                Reseller
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-normal text-black dark:text-gray-400">
                <ul className="ul-list">
                  <li>25 GB Storage</li>
                  <li>Unlimited Websit</li>
                  <li>Unlimited Bandwidth</li>
                  <li>Unlimited Email Accounts</li>
                  <li>Unlimited Sub Domans</li>
                  <li>Unlimited Mysql Database</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-3/4 m-auto ">
          <div className="md:w-72 m-9 opacity-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
            <div className="p-5 mr-10 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-white">
                VPS
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-normal text-black dark:text-gray-400">
                <ul className="ul-list">
                  <li>2 CPU Cores</li>
                  <li>2 GB RAM</li>
                  <li>30 GB SSD</li>
                  <li>1 TB Bandwidth</li>
                  <li>1 IP Addresses</li>
                  <li>Free CWP Panel</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4  mr-10">
        <div className="md:w-72 m-9 opacity-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
          <div className="p-5 ">
            <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-white">
              Cloud
            </p>
            <hr className="mt-3 text-gray-400" />

            <h1 className="mb-3 font-normal text-black dark:text-gray-400">
              <ul className="ul-list">
                <li>2 CPU Cores</li>
                <li>4 GB RAM</li>
                <li>50 GB SSD</li>
                <li>1 TB Addresses</li>
                <li>1 IP Addresses</li>
                <li>Free CWP Panel</li>
              </ul>
            </h1>
            <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
              View Plan
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-3/4 m-auto ">
          <div className="md:w-72 m-9 opacity-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
            <div className="p-5 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-white">
                Dedicated
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-normal text-black dark:text-gray-400">
                <ul className="ul-list">
                  <li>Dual 2Core Atom</li>
                  <li>2 GB RAM </li>
                  <li>500 GB HDD</li>
                  <li>1 TB Bandwidth</li>
                  <li>1 IP Addresses</li>
                  <li>Free CWP Panel</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add more cards as needed */}
    </Slider>
  );
}
