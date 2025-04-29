import { Router } from 'express';
import { fetchUserRepos,fetchRepoDetails  } from '../controllers/githubController';

const router = Router();

// GET /api/github/repos
router.get('/repos', fetchUserRepos);
router.get('/repos/:repoName', fetchRepoDetails);
export default router;