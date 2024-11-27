public class Loan
{
    public int Id { get; set; }
    public string SelbValue { get; set; }
    public string TonnerColor { get; set; }
    public int Quantity { get; private set; }
    public DateTime LoanDate { get; set; }
    public DateTime? ReturnDate { get; set; }

    // Construtor para inicialização
    public Loan(string selbValue, string tonnerColor, int quantity, DateTime loanDate)
    {
        SelbValue = selbValue;
        TonnerColor = tonnerColor;
        Quantity = quantity;
        LoanDate = loanDate;
    }

    // Método para registrar a devolução
    public void ReturnLoan()
    {
        // Valida se a devolução não ocorre antes do empréstimo
        if (ReturnDate.HasValue && ReturnDate.Value < LoanDate)
        {
            throw new InvalidOperationException("A data de devolução não pode ser anterior à data do empréstimo.");
        }

        ReturnDate = DateTime.Now;
    }

    // Método para verificar se o empréstimo está ativo
    public bool IsActive()
    {
        return !ReturnDate.HasValue;
    }

    // Método para alterar a quantidade, caso necessário
    public void UpdateQuantity(int newQuantity)
    {
        if (newQuantity < 0)
        {
            throw new ArgumentException("A quantidade não pode ser negativa.");
        }

        Quantity = newQuantity;
    }
}