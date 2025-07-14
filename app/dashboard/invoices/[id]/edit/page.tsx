import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Edit Invoice",
// };

export const generateMetadata = async (props: { params: { id: string } }) => {
  const params = await props.params;
  const id = params.id;
  const invoice = await fetchInvoiceById(id);
  const customer = (await fetchCustomers()).find(
    (c) => c.id === invoice?.customer_id
  );

  return {
    title: `Edit ${customer?.name} Invoice`,
  };
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
