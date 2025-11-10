import RevealOnScroll from "../RevealOnScroll";
export const Projects = () => {

    return <section id="projects"
    className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-8xl mx-auto px-4">
            <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Recent Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[5vw]">

                <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-8 shadow-lg border border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4" >Website Backend</h3>

                    <div className="flex flex-wrap gap-2">
                    <p className="text-gray-300 leading-relaxed mb-6">
                        The Website Backend is a Spring Boot REST API designed to power a modern React frontend.
                        It provides secure user authentication, dynamic data management, and administrative control over site content.
                        The system emphasizes maintainable architecture, role-based access control, and smooth communication between the backend and client through API endpoints.
                    </p>
                     <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">What the system does</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Acts as the backend engine for a React web application, handling all data flow and business logic.</li>
                                <li>Stores and retrieves user information, blog entries, and form submissions through a relational database.</li>
                                <li>Implements user authentication using HTTP cookies, allowing for persistent sessions and secure role-based access.</li>
                                <li>Powers a blog management feature where admins can create, edit, delete, and publish posts directly through a connected dashboard.</li>
                                <li>Provides endpoints for handling user-submitted forms, using validation to insure accurate data.</li>
                            </ul>
                        </div>

                    <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Highlights</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>
                            <span className="font-medium text-white">Spring Boot REST API:</span> Acts as the backend framework,
                             handling requests, routing, and data operations efficiently.
                        </li>
                        <li>
                            <span className="font-medium text-white">React Frontend Integration: </span> Communicates with a 
                            React client via JSON-based HTTP requests.
                        </li>
                        <li>
                        <span className="font-medium text-white">Persistent Data Layer: </span> Employs a relational database
                         with JPA/Hibernate for consistent and scalable data management.
                        </li>
                        <li>
                        <span className="font-medium text-white">Spring Security Integration: </span> Manages authentication 
                        and authorization using cookies rather than tokens, creating a secure browser experience.
                        </li>
                        <li>
                        <span className="font-medium text-white">CORS & Cross-Origin Support: </span> Configured for communication 
                        between the React frontend and Spring backend across different origins.
                        </li>
                    </ul>
                    <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        This backend serves as the foundation of a secure, 
                        full-stack web application. Built with Spring Boot and paired with a React frontend, 
                        it delivers a production-style architecture complete with authentication, data persistence, 
                        and admin-level content management.
                    </p>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-8 shadow-lg border border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4" >Website Frontend</h3>

                    <a className="inline-block text-blue-400 hover:text-blue-300 underline mb-4"
                     href="https://github.com/oolong-enterprises/portfolio-front" target="blank"> 
                    GitHub Link →</a>

                    <div className="flex flex-wrap gap-2">
                    <p className="text-gray-300 leading-relaxed mb-6">
                        The Website Frontend is a React-based interface that connects directly to 
                        a Spring Boot REST API, providing users with a clean, responsive, and secure experience. 
                        It's built for scalability, featuring authentication-based routing, 
                        dynamic data rendering, and a user interface for interacting with backend services.
                    </p>
                     <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">What the system does</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Provides a responsive interface for users to navigate, log in, and interact with the backend API.</li>
                                <li>Handles form submissions that save directly to the database through the connected Spring Boot API.</li>
                                <li>Manages authentication via HTTP cookies, enabling persistent sessions and login/logout flows.</li>
                                <li>Restricts access to certain routes based on user roles, regular users can view content. While admins can access protected pages to manage data.</li>
                                <li>Provides endpoints for handling user-submitted forms, using validation to insure accurate data.</li>
                            </ul>
                        </div>

                    <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Highlights</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>
                            <span className="font-medium text-white">Role-Based Routing: </span> 
                            Integrates with the backend's cookie-based authentication to show or hide content based on user role.
                        </li>
                        <li>
                            <span className="font-medium text-white">Dynamic Form Handling: </span> 
                            Captures and validates user inputs, then sends data securely to backend endpoints.
                        </li>
                        <li>
                        <span className="font-medium text-white">Admin Dashboard: </span>
                        Provides an intuitive UI for content management, blog posts, user data, and form submissions. All powered by backend APIs.
                        </li>
                        <li>
                        <span className="font-medium text-white">Cookie-Based Auth Sync: </span> 
                        Works with Spring Boot's cookie sessions, maintaining login state through secure browser storage.
                        </li>
                        <li>
                        <span className="font-medium text-white">Protected Routes:</span> 
                        Uses route guards and conditional rendering to secure admin pages and sensitive UI components.
                        </li>
                    </ul>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-8 shadow-lg border border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4" >Inventory Management System Demo</h3>

                    <a className="inline-block text-blue-400 hover:text-blue-300 underline mb-4"
                     href="https://github.com/oolong-enterprises/InventoryDemo" target="blank"> 
                    GitHub Link →</a>
                    <div className="flex flex-wrap gap-2">
                    <p className="text-gray-300 leading-relaxed mb-6">
                        This project is a fully functional desktop inventory management UI built in Java, 
                        designed to connect to a MySQL database and perform full Create, Read, Update, Delete (CRUD) 
                        operations. It provides a clean interface for viewing, adding, editing and removing inventory 
                        records, backed by a persistent data store.
                    </p>
                     <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">What the system does</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Connects to a MySQL database and retrieves the current inventory items.</li>
                                <li>Displays the data in a UI table.</li>
                                <li>Allows users to add new inventory entries, edit existing ones, and delete items as needed.</li>
                            </ul>
                        </div>

                    <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Highlights</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>
                            <span className="font-medium text-white">Dynamic GUI system:</span> The
                            application’s user interface adapts automatically to various data types
                            using a modular system of interfaces and generics. This allows new data
                            structures or tables to be integrated with minimal code changes.
                        </li>
                        <li>
                            <span className="font-medium text-white">Separation of concerns:</span> Each
                            layer presentation, business logic, and persistence is cleanly defined,
                            ensuring maintainability.
                        </li>
                        <li>
                        <span className="font-medium text-white">Reusable components:</span> The use of
                            Java generics enables shared logic across different data types without
                            redundant code, making the system highly reusable and adaptable.
                        </li>
                    </ul>
                    </div>
                    </div>
                    </div>
                </div>

                
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-8 shadow-lg border border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4" >Map Search</h3>

                    <a className="inline-block text-blue-400 hover:text-blue-300 underline mb-4"
                     href="https://github.com/oolong-enterprises/Map_Search" target="blank"> 
                    GitHub Link →</a>
                    <div className="flex flex-wrap gap-2">
                    <p className="text-gray-300 leading-relaxed mb-6">
                       The Map Search Demo is a Java application designed to showcase an efficient, 
                       depth-based search algorithmwith a interactive JavaFX interface. Utilizing  recursion, this algorithm
                       demonstrates how a search engine can filter complex map data structures.
                    </p>
                     <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">What the system does</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Provides a UI for users to enter search terms</li>
                                <li>Executes a depth-based search algorithm</li>
                                <li>Shows the user a visualized the search process to demonstrate recursive search</li>
                            </ul>
                        </div>

                    <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Highlights</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>
                            <span className="font-medium text-white">Recursive Search: </span>The algorithm performs 
                            a depth-first traversal over nodes representing map entities. 
                            Each node implements an interface that maps relationships between nodes.
                        </li>
                        <li>
                            <span className="font-medium text-white">Data Processing: </span> The program takes a text file
                            input to assign mapping relationships. This could easily be converted to any type of data file.
                            The data is converted into nodes that can be searched.
                        </li>
                    </ul>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4" >Thread Demo</h3>
                    <div className="flex flex-wrap gap-2">
                    <p>
                        Coming Soon
                    </p>
                    </div>
                </div>

            </div>
            
            </RevealOnScroll>
        </div>                
    </section>

}