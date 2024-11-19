public class Tonner
{
    public int Id { get; set; }
    public string SelbValue { get; set; }
    public string Color { get; set; }
    public int Quantity { get; set; }
    public string Model { get; set; }

    public Tonner(string selbValue, string color, int quantity, string model)
    {
        SelbValue = selbValue;
        Color = color;
        Quantity = quantity;
        Model = model;
    }

    public string Status
    {
        get
        {
            if (Quantity == 0)
            {
                return "Sem tonner no estoque";
            }
            else if (Quantity == 1)
            {
                return "Somente 1 em estoque";
            }
            else
            {
                return "Disponível";
            }
        }
    }

    public void AddTonners(int amount)
    {
        if (amount <= 0)
        {
            throw new ArgumentException("A quantidade a adicionar deve ser maior que zero.");
        }
        Quantity += amount;
    }

    public bool RemoveTonner()
    {
        if (Quantity > 0)
        {
            Quantity--;
            return true;
        }
        return false;
    }
}