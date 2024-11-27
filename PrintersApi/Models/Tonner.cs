public class Tonner
{
    public int Id { get; set; }
    public string Color { get; set; }
    public int Quantity { get; private set; }
    public string Model { get; set; }

    // Construtor
    public Tonner(string color, int quantity, string model)
    {
        Color = color;
        Quantity = quantity;
        Model = model;
    }

    // Propriedade de status simplificada
    public string Status
    {
        get
        {
            if (Quantity == 0) return "Sem tonner no estoque";
            if (Quantity == 1) return "Somente 1 em estoque";
            return "Disponível";
        }
    }

    // Método para adicionar tonners
    public void AddTonners(int amount)
    {
        Quantity += amount;
    }

    // Método para remover um tonner
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