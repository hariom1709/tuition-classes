
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Award, Calendar, Star } from "lucide-react";

const Faculties = () => {
  const faculties = [
    {
      id: 1,
      name: "Shiv Sharma",
      subject: "Chemistry",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      qualifications: ["B.Sc.", "M.Sc.", "B.Ed.", "M.Ed."],
      experience: "8+ years",
      specialization: "Organic & Inorganic Chemistry, JEE/NEET Preparation",
      achievements: [
        "95% success rate in board exams",
        "50+ students cleared JEE Advanced",
        "Expert in competitive exam coaching"
      ]
    },
    {
      id: 2,
      name: "Aakash Mittal",
      subject: "Mathematics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      qualifications: ["B.Tech", "M.Tech", "B.Ed."],
      experience: "6+ years",
      specialization: "Algebra, Geometry, Trigonometry, Calculus",
      achievements: [
        "Innovative teaching methodologies",
        "100+ students improved by 2+ grades",
        "Expert in problem-solving techniques"
      ]
    },
    {
      id: 3,
      name: "Nishant",
      subject: "Physics",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      qualifications: ["M.Sc. Physics", "B.Ed."],
      experience: "7+ years",
      specialization: "Mechanics, Electromagnetism, Modern Physics",
      achievements: [
        "Physics Olympiad coach",
        "Research publications in quantum physics",
        "Expert in conceptual clarity"
      ]
    },
    {
      id: 4,
      name: "Divya",
      subject: "Biology",
      image: "https://images.unsplash.com/photo-1594824481315-0e3a7c7a86c6?auto=format&fit=crop&w=400&q=80",
      qualifications: ["M.Sc. Botany", "B.Ed.", "Ph.D. (pursuing)"],
      experience: "5+ years",
      specialization: "Botany, Zoology, Human Physiology, NEET Preparation",
      achievements: [
        "90% NEET qualification rate",
        "Specialist in medical entrance coaching",
        "Published researcher in plant biology"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Faculty</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Meet our dedicated team of experienced educators committed to your academic success
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculties.map((faculty) => (
              <Card key={faculty.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{faculty.name}</h3>
                    <p className="text-lg opacity-90">{faculty.subject} Teacher</p>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  {/* Qualifications */}
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Qualifications</h4>
                      <div className="flex flex-wrap gap-1">
                        {faculty.qualifications.map((qual, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                          >
                            {qual}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Experience</h4>
                      <p className="text-gray-600">{faculty.experience} in teaching</p>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Specialization</h4>
                      <p className="text-gray-600 text-sm">{faculty.specialization}</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {faculty.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Teaching Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in nurturing not just academic excellence, but also critical thinking and lifelong learning skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">Tailored teaching approaches to match each student's learning style and pace.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence Focused</h3>
              <p className="text-gray-600">Commitment to achieving the highest academic standards and competitive exam success.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
              <p className="text-gray-600">Building confidence, problem-solving skills, and analytical thinking abilities.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculties;
