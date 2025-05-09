export interface Category {
  id: number;
  parent_id: number;
  name: string;
  slug: string;
  status: number;
  created_at: string;
  updated_at: string;
  fa_name: string;
  is_visible: number;
  level: number;
}

export interface TeacherInfo {
  username: string;
  firstname: string;
  lastname: string;
  firstname_en: string;
  lastname_en: string;
  sex: number;
  age: number;
}

export interface Price {
  category: PriceCategory;
  price_from: number;
}

export interface PriceCategory {
  id: number;
  name: string;
  slug: string;
  fa_name: string;
}

export interface Lesson {
  id: number;
  name: string;
  slug: string;
  level: Level;
}

export interface Level {
  name: string;
  value: number;
}

export interface TeacherDto {
  id: number;
  user_id: number;
  teacher: TeacherInfo;
  prices: Price[];
  trial_price: number;
  average_poll_score: number;
  polls_count: number;
  done_classrooms_count: number;
  students_count: number;
  avg_student_chapter: number;
  video_url: string;
  avatar_url: string;
  is_new: boolean;
  instant_booking: boolean;
  top_categories: Category[];
  lessons: Lesson[];
  has_trial: number;
  teaching_profile_active: number;
  teaching_additional_resource_choice?: string;
  teaching_book_choice?: string;
  teaching_online_choice?: string;
  teaching_technique_choice?: string;
}
