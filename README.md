# **School Location API**

## **Overview**

The **School Location API** is a backend application designed to manage schools' data and calculate the proximity of schools based on provided geographical coordinates (latitude and longitude). This API allows clients to perform actions like adding schools, fetching a list of schools, and calculating the distance to each school from a given location.

This API can be used for applications that need to access information about schools, their locations, and find the nearest schools to a specific point.

## **Features**

- **Add a new school**: Adds a school to the database with details such as name, address, latitude, and longitude.
- **Fetch schools near a location**: Given latitude and longitude, returns a list of schools sorted by proximity.
- **Calculate the distance** between a given location and each school.
- **Database integration**: Ensures schools are stored securely in a MySQL database.

## **Technology Stack**

- **Backend Framework**: Node.js with Express.js
- **Database**: MySQL
- **Query Builder**: MySQL2 (with Promises)
- **Validation**: Joi (for input validation)
- **CORS**: Cross-Origin Resource Sharing (for API access from different origins)

## **API Endpoints**

### **1. POST `/api/schools/addSchool`**

#### **Description**: 
This endpoint allows the creation of a new school in the database.

#### **Request Body (JSON)**:
```json
{
  "name": "School Name",
  "address": "School Address",
  "latitude": 123.4567,
  "longitude": -123.4567
}
```

- **name**: Name of the school (string)
- **address**: Physical address of the school (string)
- **latitude**: Latitude coordinate of the school (float)
- **longitude**: Longitude coordinate of the school (float)

#### **Response (Success)**:
```json
{
    "message": "School added successfully!",
    "schoolId": 1
}
```

#### **Response (Error)**:
```json
{
    "error": "Latitude and longitude are required"
}
```

---

### **2. GET `/api/schools/listSchools`**

#### **Description**: 
This endpoint allows you to retrieve a list of schools near a specified latitude and longitude.

#### **Query Parameters**:
- **latitude**: Latitude of the location to find nearby schools (required).
- **longitude**: Longitude of the location to find nearby schools (required).

#### **Example Request**:
```http
GET http://localhost:8000/api/schools/listSchools?latitude=37.7749&longitude=-122.4194
```

#### **Response (Success)**:
```json
[
    {
        "id": 1,
        "name": "Sunnydale High School",
        "address": "123 Sunnydale Ave, Sunnydale, USA",
        "latitude": 37.7749,
        "longitude": -122.4194,
        "distance": 0.0
    }
]
```

#### **Response (Error)**:
```json
{
    "error": "Latitude and longitude are required"
}
```

---

## **Installation**

Follow the steps below to get the application up and running on your local machine.

### **Prerequisites**

Before running the application, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MySQL** (v5.7 or higher)

### **Steps**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/school-location-api.git
   cd school-location-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Create a MySQL database and name it (e.g., `schools_db`).
   - Run the following SQL script to create the `schools` table:
   ```sql
   CREATE TABLE schools (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       address VARCHAR(255) NOT NULL,
       latitude FLOAT NOT NULL,
       longitude FLOAT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Configure database connection**:
   - Open the `src/config/database.js` file and configure the database connection details (e.g., username, password, database name).

5. **Start the server**:
   ```bash
   npm start
   ```

   The server will start and listen on port `8000`.

---

## **Testing**

You can test the API using **Postman** or **cURL**.

1. **Add a School**:
   Use a **POST** request to `/api/schools/addSchool` with the body as shown in the **POST Request - Add a School** section above.

2. **Fetch Schools by Location**:
   Use a **GET** request to `/api/schools/listSchools` with query parameters for `latitude` and `longitude` as shown in the **GET Request - List Schools** section above.

---

## **Error Handling**

The API returns the following HTTP status codes based on the outcome of the request:

- **200 OK**: The request was successful, and a response is provided.
- **400 Bad Request**: Input validation failed or required parameters were missing.
- **500 Internal Server Error**: An error occurred during the processing of the request.

---

## **Contributing**

If you want to contribute to this project, follow these steps:

1. **Fork the repository**.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/school-location-api.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature-name
   ```
4. **Make your changes**.
5. **Commit your changes**:
   ```bash
   git commit -m "Add your commit message"
   ```
6. **Push to your branch**:
   ```bash
   git push origin feature-name
   ```
7. **Create a pull request**.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any queries or issues, feel free to reach out via [GitHub Issues](https://github.com/your-repo/school-location-api/issues) or email us at support@yourdomain.com.

