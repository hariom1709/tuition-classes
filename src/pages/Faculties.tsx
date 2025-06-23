
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
      image: "/lovable-uploads/8d636d02-cbbd-43f3-bf34-a1de1c711b5b.png",
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
      image: "/lovable-uploads/6ba841bd-b730-4e95-8f6d-433fe1f9d406.png",
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
      image: "/lovable-uploads/2b534efa-7fac-4aa7-ad02-685d559a6c95.png",
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
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Expert Faculty</h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto px-4">
            Meet our dedicated team of experienced educators committed to your academic success
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {faculties.map((faculty) => (
              <Card key={faculty.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={faculty.image}
                    alt={`${faculty.name} - ${faculty.subject} Teacher`}
                    className="w-full h-32 sm:h-40 object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold">{faculty.name}</h3>
                    <p className="text-base sm:text-lg opacity-90">{faculty.subject} Teacher</p>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  {/* Qualifications */}
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Qualifications</h4>
                      <div className="flex flex-wrap gap-1">
                        {faculty.qualifications.map((qual, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full whitespace-nowrap"
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
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Experience</h4>
                      <p className="text-gray-600 text-sm">{faculty.experience} in teaching</p>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Specialization</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faculty.specialization}</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Achievements</h4>
                      <ul className="space-y-1">
                        {faculty.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-600 text-xs sm:text-sm flex items-start leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            <span className="break-words">{achievement}</span>
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Teaching Philosophy</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We believe in nurturing not just academic excellence, but also critical thinking and lifelong learning skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Tailored teaching approaches to match each student's learning style and pace.</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Excellence Focused</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Commitment to achieving the highest academic standards and competitive exam success.</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Holistic Development</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Building confidence, problem-solving skills, and analytical thinking abilities.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculties;
