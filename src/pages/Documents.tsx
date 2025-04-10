
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Upload, Download, AlertTriangle } from "lucide-react";

const Documents = () => {
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

  // Mock data for documents - would be replaced with actual data from Supabase
  const documents = [
    {
      id: 1,
      type: "ID Verification",
      expiryDate: "2026-04-10",
      uploadDate: "2024-04-10T10:30:00",
      fileUrl: "#",
      status: "Valid"
    },
    {
      id: 2,
      type: "SIA License",
      expiryDate: "2025-08-15",
      uploadDate: "2023-08-15T14:45:00",
      fileUrl: "#",
      status: "Valid"
    },
    {
      id: 3,
      type: "First Aid Certificate",
      expiryDate: "2025-05-22",
      uploadDate: "2023-05-22T09:15:00",
      fileUrl: "#",
      status: "Expiring Soon"
    },
    {
      id: 4,
      type: "Health & Safety Training",
      expiryDate: null,
      uploadDate: null,
      fileUrl: null,
      status: "Missing"
    }
  ];

  return (
    <div className="container py-8 mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Compliance Documents</h1>
          <p className="text-muted-foreground">
            Manage your required documents and certifications
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((document) => (
            <Card key={document.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg font-medium">{document.type}</CardTitle>
                {document.status === "Valid" && (
                  <div className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">
                    Valid
                  </div>
                )}
                {document.status === "Expiring Soon" && (
                  <div className="px-2 py-1 rounded bg-amber-100 text-amber-800 text-xs flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    Expiring Soon
                  </div>
                )}
                {document.status === "Missing" && (
                  <div className="px-2 py-1 rounded bg-red-100 text-red-800 text-xs">
                    Required
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  {document.expiryDate && (
                    <div className="text-sm">
                      <span className="font-medium">Expires:</span>{" "}
                      {new Date(document.expiryDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  )}
                  {document.uploadDate && (
                    <div className="text-sm">
                      <span className="font-medium">Uploaded:</span>{" "}
                      {new Date(document.uploadDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                {document.fileUrl ? (
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                ) : (
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
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

export default Documents;
