import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it("should display weak if 5 value is passed", () => {
    let pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual("5 ( weak )");
  });  

  it("shoud display strong when 10 value is passed", () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual("10 ( strong )");
  });

  it("should display strongest when 20 value is passed", () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(20)).toEqual("20 ( strongest )");
  });
});
