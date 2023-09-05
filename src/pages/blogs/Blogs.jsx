import Accordion from "../../components/accordion/Accordion";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="mt-[104px] lg:mt-[144px] mb-10 lg:mb-20 w-[90%] mx-auto">
      <Accordion
        title="What is an access token and refresh token? How do they work and where should we store them on the client-side?"
        content="
        Access Token:
        An access token is a credential that is used to authenticate and authorize a user or client to access protected resources. It is typically a string of characters that is issued by an authentication server upon successful authentication. The access token contains information such as the user's identity and any associated permissions or scopes. It is commonly included in the header of API requests to prove the user's identity and permissions to access protected resources.

        Refresh Token:
        A refresh token is a credential that is used to obtain a new access token without requiring the user to re-authenticate. It is usually issued alongside an access token and has a longer expiration time. When the access token expires, the client can use the refresh token to request a new access token from the authentication server. This process is known as token refreshing or token rotation.

        The workflow typically involves the following steps:

        Authentication: The user or client sends their credentials (e.g., username and password) to the authentication server.
        Token Issuance: If the credentials are valid, the authentication server generates an access token and a refresh token.
        Access Token Usage: The client includes the access token in the headers of API requests to access protected resources.
        Expiration: The access token has a limited lifespan, after which it becomes invalid.
        Token Refresh: If the access token expires, the client can use the refresh token to request a new access token from the authentication server.
        Repeat: Steps 3-5 are repeated as necessary throughout the user's session.
        Regarding storage on the client-side, it is crucial to follow security best practices. Access tokens and refresh tokens should be stored securely to prevent unauthorized access or exposure. Here are some common approaches:

        Cookies: You can store tokens in HTTP-only cookies, which can help protect them from client-side JavaScript access and mitigate some cross-site scripting (XSS) attacks. However, this method is not foolproof, and additional security measures should be implemented.
        Local Storage: Tokens can be stored in the browser's local storage, but this approach is generally considered less secure because the data can be accessed by client-side JavaScript.
        Secure Storage APIs: Some modern web browsers provide secure storage APIs, such as the Web Cryptography API or the Keychain API, which can be used to store tokens in an encrypted form.
        In-Memory Storage: For single-page applications (SPAs) or mobile apps, tokens can be stored in memory and managed by the application framework. However, this approach is not suitable if the user expects the session to persist across browser or app restarts.
        In any case, it is crucial to consider the specific security requirements of your application and consult relevant security guidelines to ensure the proper storage and handling of access tokens and refresh tokens on the client-side."
      />
      <Accordion
        title="Compare SQL and NoSQL databases?"
        content="SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON"
      />
      <Accordion
        title="What is express js? What is Nest JS"
        content="Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI."
      />
      <Accordion
        title="What is MongoDB aggregate and how does it work"
        content="What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline."
      />
    </div>
  );
};

export default Blogs;
