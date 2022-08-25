let navbar= ()=>{
    return `
    <div class="leftPart">
            <div class="logo">
                <img src="./pic/logo.jpg" 
                alt="Monster-Logo">
            </div>
            <div class="menu-area">
                <ul>
                    <li><a href="#">job search</a>
                    <ul class="dropdown_first">
                        <li><a href="#"> JOBS BY LOCATION</a></li>
                        <li><a href="#">JOBS BY SKILLS</a></li>
                        <li><a href="#">JOBS BY TITLE</a></li>
                        <li><a href="#">JOBS BY FUNCTIONS</a></li>
                        <li><a href="#">JOBS BY INDUSTRY</a></li>
                        <li><a href="#">JOBS BY EDUCATION</a></li>
                    </ul> 
                    </li>
                </ul>
                
                <ul>
                    <li><a href="#">work from home</a>
                        <ul class="dropdown_first"> 
                
                            <li><a href="#">WORK FROM HOME JOBS IN BANGALORE</a></li>
                            <li><a href="#">WORK FROM HOME JOBS IN CHENNAI</a></li>
                            <li><a href="#">WORK FROM HOME JOBS IN DELHI</a></li>
                            <li><a href="#">WORK FROM HOME JOBS IN MUMBAI</a></li>
                            <li><a href="#">WORK FROM HOME JOBS IN NOIDA</a></li>
                            <li><a href="#">WORK FROM HOME JOBS IN GURGAON</a></li>
                        </ul>
                    </li>
                </ul>
                
                <ul>
                    <li><a href="#">carrer tips</a>
                        <ul class="dropdown_first">
                            <li><a href="#">COVID-19 CAREER ADVICE</a></li>
                            <li><a href="#">JOBS SEARCH STRATEGY</a></li>
                            <li><a href="#">RESUME & COVER LETTER</a></li>
                            <li><a href="#">INTERVIEW TIPS</a></li>
                            <li><a href="#">CAREER MANAGEMENT</a></li>
                            <li><a href="#">COURSES</a></li>
                        </ul>
                    </li>    
                </ul>
                
                <ul>
                    <li><a href="#">primium services</a>
                        <ul class="dropdown_first">
                            <li><a href="#">CAREER COACH</a></li>
                            <li><a href="#">RESUME WRITING</a></li>
                            <li><a href="#">MOCK INTERVIEW</a></li>
                            <li><a href="#">LINKENDIN MAKEOVER</a></li>
                            <li><a href="#">PROFILE</a></li>
                        </ul>
                    </li>
                </ul>
                
                <ul>
                    <li><a href="#">more</a>
                        <ul class="dropdown_first">
                            <li><a href="#">FREE JOB ALERT</a></li>
                            <li><a href="#">SALARY INDEX</a></li>
                            <li><a href="#">SEARCH TIPS</a></li>
                            <li><a href="#">JOBS APPS</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right">
            <button>Login</button>
            <button>Signup</button>
        </div>
    `
} 

export default navbar;