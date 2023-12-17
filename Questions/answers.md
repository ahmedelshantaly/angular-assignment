# Questions

## 1. We use JWTs a lot throughout our API. For instance, when a user logs in on our API, a JWT is issued and our web-application uses this token for every request for authentication Here's an example of such a token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb21lb25lQGV4YW1wbGUubmV0IiwiYWRtaW4iOmZhbHNlLCJ2YWxpZF91bnRpbCI6IldlZCBEZWMgMzEgMjM6NTk6NTkgQ0VTVCAxOTY5In0.4bl2puoaRetNjO1GsweKOnnQsYgwNa9bQIC-WQZkuNo. Why is it (or isn't it) safe to use this?

- Yes, it is safe to use JWTs. as they are digitally signed and the signature ensures that the token was not altered since it was signed. also, we can set token revocation or expiration. If a user's privileges change or if a token is compromised

## 2. In our web-application, messages sent from one user to another, can contain HTML, which poses some security risks. Describe two attack vectors bad actors might try to abuse? And how would you mitigate these vectors?
  
- When allowing users to input HTML content that is then displayed to other users, there are potential security risks associated with Cross-Site Scripting (XSS) attacks.
- Cross-Site Scripting (XSS) attackers inject malicious scripts into web applications, and these scripts are then executed by  the browsers of unsuspecting users.
  
- There are different types of XSS attacks:
  - Stored XSS: involves injecting malicious scripts into a website's server, where they are permanently stored and later served to users accessing the affected page through areas such as input fields, comments, or other user-generated content acceptance points.
  - Reflected XSS: The injected script is embedded in a URL and only serves to users who click on a manipulated link. If a web application incorporates user input directly into URLs without proper validation or encoding, it can be vulnerable to XSS attacks through URL parameters.

- To mitigate these vectors we should do:
  - Dom Sanitization: Validate and sanitize user inputs to ensure that they do not contain malicious code. Use Dom sanitization libraries and frameworks to automatically detect and block malicious input. Angular sanitizes untrusted values for HTML, styles, and URLs.
  - Content Security Policy (CSP): Implement and enforce a Content Security Policy to control which resources are allowed to be loaded and executed on a web page. This can mitigate the impact of XSS attacks by restricting the execution of scripts.

## 3. Explain the difference between mutable and immutable objects

### What is an example of an immutable object in JavaScript ?
  
- The difference between mutable and immutable object is:
  - Mutable Object: The state and value of the object can be changed after creation. Examples for mutable objects are objects, classes, and arrays.
  - Immutable Object: The state and value can't be changed after creation. Examples for immutable objects are number, and strings.
  
### What are the pros and cons of immutability?

- Pros:

  - Easier Testing: Testing is simplified when dealing with immutable objects. Since the state doesn't change, unit testing becomes more straightforward, and it's easier to write tests that cover various scenarios.
  - Predictable State: Since the state of an immutable object doesn't change, it is easier to reason about and predict its behavior. This can simplify debugging and make the code more reliable.
  - Caching and Memoization: Immutable objects can be efficiently cached, and their values can be memoized since their content remains constant. This can lead to performance optimizations in certain scenarios.

- Cons:
  - Memory Overhead: Creating new instances for every state change can lead to increased memory usage, especially in scenarios where frequent updates are necessary or with large datasets.
  - Performance Impact: Immutable objects may introduce a performance overhead, especially in scenarios where memory usage is a critical concern or where frequent object creation is a bottleneck.
  - Complexity: Working with immutable coding style is not easy for developers who are more used to mutable patterns. This can impact development speed and make code base more complex.

### How can you achieve immutability in your own code?

- There are multiple ways to achieve immutability:
- Using libraries as immutable.js or any other libraries to manage immutable objects.
- Using `const` for declarations to avoid reassign of values.
- Use `Object.freeze` to create immutable objects and use spread operator or `Object.assign` to create new objects.

## 4. If you would have to speed up the loading of our current web-application, how would you do that? (no need to actually do it, just describe the steps you would take)

- Performance Analysis: Conduct a performance analysis using tools like Lighthouse,and PageSpeed Insights to identify performance bottlenecks, including slow-loading resources, large files, and rendering issues.
- Optimize Images: compress and optimize images to reduce their file size without compromising quality. Use modern image formats (WebP) where supported, and implement lazy loading to defer the loading of off-screen images. Use different image for different screen sizes.
- Minify And Bundle: Minify and bundle JavaScript and CSS files to reduce their size. This reduces the number of HTTP requests and speeds up the loading time. Consider tree-shaking to eliminate unused code and components.
- Asynchronous Loading: Load non-essential resources asynchronously to prevent blocking the rendering of critical content. This includes scripts, stylesheets, and third-party integrations.
- Code splitting: Implement code splitting to break down large JavaScript bundles into smaller, more manageable parts. This allows the application to load only the necessary code for the current view, reducing initial load times.
- Lazy Loading: Lazily load components and modules in angular application only when needed that help reducing initial bundle size and leads to decreasing the loading time.

## 5. What part of a new job do you think is more important

- Choose your own hardware, but work with a company supplied operating system image.
