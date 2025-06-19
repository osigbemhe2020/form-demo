import TopBox from '@/components/ProfessionalDashboard/topbox'
import Details from '@/components/ProfessionalDashboard/main'
import LeftSection from '@/components/ProfessionalDashboard/left-section'

export default function Page() {
  return (
      <div className='!ml-[-25px]'>
        <h2 className="!ml-[40px] !my-[30px] text-[#006A05] text-[24px] font-medium">Profile Settings</h2>
        <TopBox/>
        <div className='!mt-[35px] flex gap-[20px] !pl-[20px]'>
            <LeftSection/> 
            <Details/>     
        </div>
      </div> 
  )
}