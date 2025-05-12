import { Router } from 'express';
import {
    getAllUserRepos,
  getRepoByName,
  getAllFormattedRepos,
} from '../controllers/githubController';

const router = Router();
// GET /repos → sadece isim, açıklama ve URL döner.
// GET /repos/formatted → tüm detaylar (tech stack, readme, subProjects vs.)
// GET /repos/:name → tek bir projenin detayını döner.

// /api/github/repos
router.get('/repos', getAllUserRepos);

// /api/github/repos/:name
router.get('/repos/:name', getRepoByName);

// /api/github/formatted
router.get('/formatted', getAllFormattedRepos);

export default router;