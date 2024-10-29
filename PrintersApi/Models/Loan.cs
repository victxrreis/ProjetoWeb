public class Loan
{
    public int Id { get; set; }
    public string SelbValue { get; set; }
    public string TonnerColor { get; set; }
    public int Quantity { get; private set; }
    public DateTime LoanDate { get; set; }
    public DateTime? ReturnDate { get; set; }

    public Loan(string selbValue, string tonnerColor, int quantity, DateTime loanDate)
    {
        SelbValue = selbValue;
        TonnerColor = tonnerColor;
        Quantity = quantity;
        LoanDate = loanDate;
    }

    public void ReturnLoan()
    {
        ReturnDate = DateTime.Now;
    }

    public bool IsActive()
    {
        return !ReturnDate.HasValue;
    }
}