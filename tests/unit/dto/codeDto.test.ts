import { CodeDto } from "@/core/dto/codeDto";
import { expect } from "chai";

describe("CodeDto", () => {
  it("No.1 should create a CodeDto instance with default values", () => {
    const code = new CodeDto();

    expect(code.id).to.equal("");
    expect(code.name).to.equal("");
    expect(code.type).to.equal("");
  });

  it("should create a CodeDto instance with provided values", () => {
    const codeData = {
      id: "1",
      name: "Code 1",
      type: "type 1",
    };
    const code = new CodeDto(codeData);

    expect(code.id).to.equal(codeData.id);
    expect(code.name).to.equal(codeData.name);
    expect(code.type).to.equal(codeData.type);
  });

  it("should create a CodeDto instance with default values when no data is provided", () => {
    const codeData = undefined;
    const code = new CodeDto(codeData);

    expect(code.id).to.equal("");
    expect(code.name).to.equal("");
    expect(code.type).to.equal("");
  });
});