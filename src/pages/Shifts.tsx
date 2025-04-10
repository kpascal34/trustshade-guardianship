
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock } from "lucide-react";

const Shifts = () => {
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

  // Mock data for shifts - would be replaced with actual data from Supabase
  const shifts = [
    {
      id: 1,
      details: "Security Guard - Main Entrance",
      startTime: "2025-04-12T08:00:00",
      endTime: "2025-04-12T16:00:00",
      status: "Upcoming"
    },
    {
      id: 2,
      details: "Event Security - Conference",
      startTime: "2025-04-15T09:00:00",
      endTime: "2025-04-15T17:00:00",
      status: "Upcoming"
    },
    {
      id: 3,
      details: "Patrol Duty - North Section",
      startTime: "2025-04-10T22:00:00",
      endTime: "2025-04-11T06:00:00",
      status: "Completed"
    }
  ];

  return (
    <div className="container py-8 mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Shifts</h1>
          <p className="text-muted-foreground">
            View your upcoming and past shifts
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-1 gap-6">
          {shifts.map((shift) => (
            <Card key={shift.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg font-medium">{shift.details}</CardTitle>
                <div className={`px-2 py-1 rounded text-xs ${shift.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                  {shift.status}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {new Date(shift.startTime).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {new Date(shift.startTime).toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })} - {new Date(shift.endTime).toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shifts;
