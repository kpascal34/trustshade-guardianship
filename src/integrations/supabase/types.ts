export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      audit_logs: {
        Row: {
          change_timestamp: string | null
          changed_by: string | null
          details: Json | null
          id: number
          operation: string
          record_id: string
          table_name: string
        }
        Insert: {
          change_timestamp?: string | null
          changed_by?: string | null
          details?: Json | null
          id?: number
          operation: string
          record_id: string
          table_name: string
        }
        Update: {
          change_timestamp?: string | null
          changed_by?: string | null
          details?: Json | null
          id?: number
          operation?: string
          record_id?: string
          table_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      compliance_documents: {
        Row: {
          doc_type: string
          document_type_id: number | null
          expiry_date: string | null
          file_url: string
          id: number
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          uploaded_at: string | null
          user_id: string
        }
        Insert: {
          doc_type: string
          document_type_id?: number | null
          expiry_date?: string | null
          file_url: string
          id?: number
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          uploaded_at?: string | null
          user_id: string
        }
        Update: {
          doc_type?: string
          document_type_id?: number | null
          expiry_date?: string | null
          file_url?: string
          id?: number
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          uploaded_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "compliance_documents_document_type_id_fkey"
            columns: ["document_type_id"]
            isOneToOne: false
            referencedRelation: "document_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compliance_documents_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compliance_documents_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          service: string | null
          status: string
          subject: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          service?: string | null
          status?: string
          subject: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          service?: string | null
          status?: string
          subject?: string
          user_id?: string | null
        }
        Relationships: []
      }
      document_types: {
        Row: {
          description: string | null
          id: number
          name: string
        }
        Insert: {
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      integration_events: {
        Row: {
          created_at: string | null
          id: number
          payload: Json
          processed_at: string | null
          service: string
          status: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          payload: Json
          processed_at?: string | null
          service: string
          status?: string
        }
        Update: {
          created_at?: string | null
          id?: number
          payload?: Json
          processed_at?: string | null
          service?: string
          status?: string
        }
        Relationships: []
      }
      invoices: {
        Row: {
          amount: number
          created_at: string | null
          due_date: string
          id: number
          invoice_date: string
          paid_date: string | null
          profile_id: string
          quickbooks_invoice_id: string | null
          shift_id: number | null
          status: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          due_date: string
          id?: number
          invoice_date?: string
          paid_date?: string | null
          profile_id: string
          quickbooks_invoice_id?: string | null
          shift_id?: number | null
          status?: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          due_date?: string
          id?: number
          invoice_date?: string
          paid_date?: string | null
          profile_id?: string
          quickbooks_invoice_id?: string | null
          shift_id?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_shift_id_fkey"
            columns: ["shift_id"]
            isOneToOne: false
            referencedRelation: "shifts"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: number
          is_read: boolean | null
          message: string
          notification_type: string
          sent_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_read?: boolean | null
          message: string
          notification_type: string
          sent_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_read?: boolean | null
          message?: string
          notification_type?: string
          sent_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          full_name: string
          id: string
          role: string
        }
        Insert: {
          created_at?: string | null
          full_name: string
          id: string
          role: string
        }
        Update: {
          created_at?: string | null
          full_name?: string
          id?: string
          role?: string
        }
        Relationships: []
      }
      shift_applications: {
        Row: {
          applicant_id: string | null
          application_status: string
          applied_at: string | null
          id: number
          shift_id: number | null
        }
        Insert: {
          applicant_id?: string | null
          application_status?: string
          applied_at?: string | null
          id?: number
          shift_id?: number | null
        }
        Update: {
          applicant_id?: string | null
          application_status?: string
          applied_at?: string | null
          id?: number
          shift_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shift_applications_applicant_id_fkey"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shift_applications_shift_id_fkey"
            columns: ["shift_id"]
            isOneToOne: false
            referencedRelation: "shifts"
            referencedColumns: ["id"]
          },
        ]
      }
      shift_history: {
        Row: {
          changed_at: string | null
          changed_by: string | null
          comment: string | null
          id: number
          new_status: string | null
          old_status: string | null
          shift_id: number | null
        }
        Insert: {
          changed_at?: string | null
          changed_by?: string | null
          comment?: string | null
          id?: number
          new_status?: string | null
          old_status?: string | null
          shift_id?: number | null
        }
        Update: {
          changed_at?: string | null
          changed_by?: string | null
          comment?: string | null
          id?: number
          new_status?: string | null
          old_status?: string | null
          shift_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shift_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shift_history_shift_id_fkey"
            columns: ["shift_id"]
            isOneToOne: false
            referencedRelation: "shifts"
            referencedColumns: ["id"]
          },
        ]
      }
      shifts: {
        Row: {
          assigned_to: string | null
          created_at: string | null
          description: string | null
          end_time: string
          id: number
          start_time: string
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string | null
          description?: string | null
          end_time: string
          id?: number
          start_time: string
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string | null
          description?: string | null
          end_time?: string
          id?: number
          start_time?: string
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shifts_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: { role: Database["public"]["Enums"]["app_role"] }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "staff" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "staff", "user"],
    },
  },
} as const
