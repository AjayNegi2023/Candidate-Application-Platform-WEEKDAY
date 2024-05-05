export const filterJobs = (jobs, filters, activeFilters) => {
    return jobs.filter(job => {
        return activeFilters.every(filter => {
            if (filter === "role") {
                return job.jobRole.toLowerCase() === filters[filter].toLowerCase();
            } 
            
            else if (filter === "experience") {
                const minExp = parseInt(filters[filter]);
                return job.minExp >= minExp;
            } 
            
            else if (filter === "On-site") {
                return job.location.toLowerCase().includes("On-site") === (filters[filter].toLowerCase() === "On-site");
            } 
            
            else if (filter === "remote") {
                return job.location.toLowerCase().includes("remote") === (filters[filter].toLowerCase() === "remote");
            } 
            
            else if (filter === "minBasePay") {
                const baseSalary = parseInt(filters[filter]);
                return job.minJdSalary >= baseSalary && job.minJdSalary <= baseSalary + 50;
            } 
            
            else if (filter === "companyName") {
                return job.companyName.toLowerCase().includes(filters[filter].toLowerCase());
            } 
            
            else if (filter === "location") {
                return job.location.toLowerCase().includes(filters[filter].toLowerCase());
            } 
            
            else if (filter === "techStack") {
                const stack =  filters[filter].toLowerCase();

                if(stack=="react js"){
                    return job.jobRole.toLowerCase()=="frontend";
                }
                else if(stack=="node js"){
                    return job.jobRole.toLowerCase()=="backend";
                }
                else if(stack=="java"){
                    return job.jobRole.toLowerCase()=="backend";
                }

            }
            return true;
        });
    });
};