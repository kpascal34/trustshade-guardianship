
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, CreditCard, CheckCircle, Clock } from "lucide-react";

const Invoices = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Mock data for invoices - would be replaced with actual data from Supabase
  const invoices = [
    {
      id: "INV-001",
      details: "Security Services - March 2025",
      amount: 1250.00,
      date: "2025-03-31",
      status: "Paid",
      shiftDetails: "Corporate Event Security"
    },
    {
      id: "INV-002",
      details: "Security Services - February 2025",
      amount: 980.00,
      date: "2025-02-28",
      status: "Paid",
      shiftDetails: "Retail Location Security"
    },
    {
      id: "INV-003",
      details: "Security Services - April 2025",
      amount: 1450.00,
      date: "2025-04-05",
      status: "Pending",
      shiftDetails: "Construction Site Security"
    }
  ];

  return (
    <div className="container py-8 mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Invoices</h1>
          <p className="text-muted-foreground">
            View and download your invoices
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-1 gap-6">
          {invoices.map((invoice) => (
            <Card key={invoice.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-lg font-medium">{invoice.id}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{invoice.details}</p>
                </div>
                {invoice.status === "Paid" ? (
                  <div className="flex items-center px-2 py-1 rounded bg-green-100 text-green-800 text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Paid
                  </div>
                ) : (
                  <div className="flex items-center px-2 py-1 rounded bg-amber-100 text-amber-800 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Pending
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Amount</span>
                    <span className="font-medium">£{invoice.amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Date</span>
                    <span>
                      {new Date(invoice.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Work Performed</span>
                    <span>{invoice.shiftDetails}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                {invoice.status === "Pending" && (
                  <Button size="sm">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay Now
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invoices;
