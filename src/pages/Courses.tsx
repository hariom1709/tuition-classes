import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calculator, Atom, Zap, Microscope, Clock, DollarSign, Users } from "lucide-react";
const Courses = () => {
  const courses = [{
    id: 1,
    title: "Mathematics",
    subtitle: "Class 6-12",
    icon: <Calculator className="h-12 w-12 text-blue-600" />,
    description: "Comprehensive mathematics program covering algebra, geometry, trigonometry, and problem-solving techniques for middle and high school students.",
    features: ["Complete NCERT syllabus coverage", "Regular practice sessions", "Conceptual clarity focus", "Board exam preparation"],
    timing: "Mon, Wed, Fri - 4:00 PM to 6:00 PM",
    duration: "2 hours per session",
    fee: "₹3,000/month",
    batchSize: "15-20 students"
  }, {
    id: 2,
    title: "Chemistry",
    subtitle: "Class 6-12",
    icon: <Atom className="h-12 w-12 text-green-600" />,
    description: "In-depth chemistry curriculum covering organic, inorganic, and physical chemistry with practical applications and JEE/NEET preparation.",
    features: ["Organic & Inorganic Chemistry", "Physical Chemistry concepts", "Laboratory techniques", "JEE/NEET preparation"],
    timing: "Tue, Thu, Sat - 2:00 PM to 4:00 PM",
    duration: "2 hours per session",
    fee: "₹4,000/month",
    batchSize: "12-15 students"
  }, {
    id: 3,
    title: "Physics",
    subtitle: "Class 6-12",
    icon: <Zap className="h-12 w-12 text-yellow-600" />,
    description: "Advanced physics concepts including mechanics, thermodynamics, electromagnetism, and modern physics with problem-solving emphasis.",
    features: ["Mechanics & Thermodynamics", "Electromagnetism", "Modern Physics", "Numerical problem solving"],
    timing: "Mon, Wed, Fri - 6:00 PM to 8:00 PM",
    duration: "2 hours per session",
    fee: "₹4,000/month",
    batchSize: "12-15 students"
  }, {
    id: 4,
    title: "Biology",
    subtitle: "Class 6-12",
    icon: <Microscope className="h-12 w-12 text-red-600" />,
    description: "Comprehensive biology program covering botany, zoology, and human physiology with special focus on NEET preparation.",
    features: ["Botany & Zoology", "Human Physiology", "Genetics & Evolution", "NEET preparation focus"],
    timing: "Tue, Thu, Sat - 10:00 AM to 12:00 PM",
    duration: "2 hours per session",
    fee: "₹4,000/month",
    batchSize: "12-15 students"
  }];
  return <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose from our comprehensive range of subjects designed to help you excel in your academics
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map(course => <Card key={course.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {course.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {course.title}
                  </CardTitle>
                  <p className="text-lg text-gray-600 font-medium">{course.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 text-center">{course.description}</p>
                  
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, index) => <li key={index} className="text-gray-600 text-sm flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>)}
                    </ul>
                  </div>

                  {/* Course Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Timing</p>
                        <p className="text-gray-600">{course.timing}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">Fee</p>
                        <p className="text-gray-600">{course.fee}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900">Batch Size</p>
                        <p className="text-gray-600">{course.batchSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-900">Duration</p>
                        <p className="text-gray-600">{course.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link to="/contact">
                      
                    </Link>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Our Courses Stand Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Batches</h3>
              <p className="text-gray-600">Limited students per batch ensuring personalized attention for every student.</p>
            </div>
            <div>
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-600">Engaging teaching methods with practical examples and real-world applications.</p>
            </div>
            <div>
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Regular Assessment</h3>
              <p className="text-gray-600">Continuous evaluation and feedback to track progress and improvement areas.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Courses;