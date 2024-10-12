import card from '../assets/Images/background.jpg';
import macCheese from '../assets/Images/mac.jpg';
import pancakes from '../assets/Images/pancake.jpg';
export default function Cards() {
    // Dynamic array of card data
    const cardsData = [
        {
            title: "Smoky Pizza",
            description: "Our Smoky Pizza is a delicious combination of smoked chicken, mushrooms, and cheese. It's a must-try for pizza lovers!",
            img: card,
        },
        {
            title: "Honey Pancakes",
            description: "Our Honey Pancakes are a perfect breakfast treat. They're fluffy, sweet, and delicious. Try them today!",
            img: pancakes,
        },
        {
            title: "Mac & Cheese",
            description: "Our Mac & Cheese is a classic comfort food that's perfect for any occasion. It's creamy, cheesy, and delicious. Try it today!",
            img: macCheese,
        }
    ];

    return (
        <div className='px-6'>
            <h1 className="my-8 shadow-sm text-center text-3xl font-extrabold tracking-tight leading-none text-white md:text-2xl lg:text-3xl">
                Our Top Dishes
            </h1>

            <div className="card flex flex-col sm:flex-row justify-center gap-4 items-center">
                {cardsData.map((card, index) => (
                    <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-secondary dark:border-gray-700">
                        <a href="https://github.com/codeintrovert">
                            <img className="rounded-t-lg" src={card.img} alt={card.title} />
                        </a>
                        <div className="p-5">
                            <a href="https://github.com/codeintrovert">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                            <a href="https://github.com/codeintrovert" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
