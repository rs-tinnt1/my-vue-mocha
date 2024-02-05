import ApiService from "@/core/services/api.service";
import { AxiosRequestConfig } from "axios";
import { expect } from "chai";

describe("ApiService", () => {
  describe("GET", () => {
    it("should send a GET request to the specified URL", async () => {
      // Arrange
      const url = "/api/data";

      // Act
      const response = await ApiService.GET(url);

      // Assert
      expect(response.config.method).to.equal("get");
      expect(response.config.url).to.equal(url);
    });

    it("should send a GET request with additional configuration", async () => {
      // Arrange
      const url = "/api/data";
      const config: AxiosRequestConfig = {
        headers: {
          Authorization: "Bearer token",
        },
      };

      // Act
      const response = await ApiService.GET(url, config);

      // Assert
      expect(response.config.method).to.equal("get");
      expect(response.config.url).to.equal(url);
      expect(response.config.headers).to.deep.equal(config.headers);
    });
  });

  describe("POST", () => {
    it("should send a POST request to the specified URL with optional data", async () => {
      // Arrange
      const url = "/api/data";
      const data = { name: "John Doe" };

      // Act
      const response = await ApiService.POST(url, data);

      // Assert
      expect(response.config.method).to.equal("post");
      expect(response.config.url).to.equal(url);
      expect(response.config.data).to.deep.equal(data);
    });

    it("should send a POST request with additional configuration", async () => {
      // Arrange
      const url = "/api/data";
      const data = { name: "John Doe" };
      const config: AxiosRequestConfig = {
        headers: {
          Authorization: "Bearer token",
        },
      };

      // Act
      const response = await ApiService.POST(url, data, config);

      // Assert
      expect(response.config.method).to.equal("post");
      expect(response.config.url).to.equal(url);
      expect(response.config.data).to.deep.equal(data);
      expect(response.config.headers).to.deep.equal(config.headers);
    });
  });

  describe("PUT", () => {
    it("should send a PUT request to the specified URL with optional data", async () => {
      // Arrange
      const url = "/api/data";
      const data = { name: "John Doe" };

      // Act
      const response = await ApiService.PUT(url, data);

      // Assert
      expect(response.config.method).to.equal("put");
      expect(response.config.url).to.equal(url);
      expect(response.config.data).to.deep.equal(data);
    });

    it("should send a PUT request with additional configuration", async () => {
      // Arrange
      const url = "/api/data";
      const data = { name: "John Doe" };
      const config: AxiosRequestConfig = {
        headers: {
          Authorization: "Bearer token",
        },
      };

      // Act
      const response = await ApiService.PUT(url, data, config);

      // Assert
      expect(response.config.method).to.equal("put");
      expect(response.config.url).to.equal(url);
      expect(response.config.data).to.deep.equal(data);
      expect(response.config.headers).to.deep.equal(config.headers);
    });
  });

  describe("DELETE", () => {
    it("should send a DELETE request to the specified URL", async () => {
      // Arrange
      const url = "/api/data";

      // Act
      const response = await ApiService.DELETE(url);

      // Assert
      expect(response.config.method).to.equal("delete");
      expect(response.config.url).to.equal(url);
    });

    it("should send a DELETE request with additional configuration", async () => {
      // Arrange
      const url = "/api/data";
      const config: AxiosRequestConfig = {
        headers: {
          Authorization: "Bearer token",
        },
      };

      // Act
      const response = await ApiService.DELETE(url, config);

      // Assert
      expect(response.config.method).to.equal("delete");
      expect(response.config.url).to.equal(url);
      expect(response.config.headers).to.deep.equal(config.headers);
    });
  });
});