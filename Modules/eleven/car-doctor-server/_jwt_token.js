/**
 * Our objective is to make api secure
 * The person who is authorized will only get the data
 *
 * concept:
 * 1. assign tow tokens for each person(access token, refresh token)
 * 2. access token contains: user identification (email,role etc.) valid for a shorter duration
 * 3. refresh token is used: to recreate an access token that is expired.
 * 4. If refresh is invalid then logout the user
 */

/**
 * How to create the JWT token
 *1. jwt => json web token
 *2. generate a token by using jwt.sign
 *3. create an api  set to cookie. httpONly, secure, samesite
 *4. from client side: axios with credentials true
 *5. cors setup origin and credentials: true
 *
 */

/**
 * 1.for secure api calls
 * 2. install cookie parser and use it as a middleware
 * 3. req.cookies
 * 4. on the client side: make api calls using axios withCredentials: true (or credentials include while
 *    using fetch)
 * 5.
 */
