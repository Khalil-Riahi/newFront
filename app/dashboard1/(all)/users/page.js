import ComponentCard from "./../../../common/ComponentCard";
import PageBreadcrumb from "./../../../common/PageBreadCrumb";
import BasicTableThree from "./../../../components/tables/BasicTableThree";



export default function Users(){
    return (
        <div>
      <PageBreadcrumb pageTitle="Basic Table" />
      <div className="space-y-6">
        <ComponentCard title="Basic Table 1">
          <BasicTableThree />
        </ComponentCard>
      </div>
    </div>
    )
}