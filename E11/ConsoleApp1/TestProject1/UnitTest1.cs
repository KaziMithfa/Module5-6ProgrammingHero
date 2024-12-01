using ConsoleApp1;

namespace TestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            Calculator calculator = new Calculator();
            int result = calculator.Add(4, 6);
            Assert.AreEqual(10, result);
        }

        [TestMethod]
        public void TestMethod2()
        {
            Calculator calculator = new Calculator();
            int result = calculator.Mul(4, 4);
            Assert.AreEqual(16, result);
        }
    }
}